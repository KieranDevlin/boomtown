//iterate through an undetermined amount of tags and concatenates into a string to use in gql query
function tagsQueryString(tags, itemid, result) {
  for (let i = tags.length; i > 0; i--) {
    result += `(${itemid}, $${i}),`;
  }
  return result.slice(0, -1) + ';';
}
module.exports = postgres => {
  return {
    async createUser({ fullname, email, password }) {
      const newUserInsert = {
        // @TODO: Authentication - Server
        text:
          'INSERT INTO users (fullname, email, password, bio) VALUES  ($1, $2, $3) RETURNING *;',
        values: [fullname, email, password]
      };
      try {
        const user = await postgres.query(newUserInsert);
        return user.rows[0];
      } catch (e) {
        switch (true) {
          case /users_fullname_key/.test(e.message):
            throw 'An account with this username already exists.';
          case /users_email_key/.test(e.message):
            throw 'An account with this email already exists.';
          default:
            throw 'There was a problem creating your account.';
        }
      }
    },
    async getUserAndPasswordForVerification(email) {
      const findUserQuery = {
        // @TODO: Authentication - Server
        text: 'SELECT * FROM users WHERE email = $1',
        values: [email]
      };
      try {
        const user = await postgres.query(findUserQuery);
        if (!user) throw 'User was not found.';
        return user.rows[0];
      } catch (e) {
        throw 'User was not found.';
      }
    },
    async getUserById(id) {
      const getUserQuery = {
        // dont return password for security
        text: 'SELECT id, fullname, email, bio FROM users WHERE id = $1 ',
        values: [id]
      };
      try {
        const user = await postgres.query(getUserQuery);
        if (!user) throw 'User was not found.';
        return user.rows[0];
      } catch (e) {
        throw ('User was not found. Error code:', e);
      }
    },
    async getItems(idToOmit) {
      const getItemsQuery = {
        text: `SELECT * FROM items WHERE ownerid != $1`,
        values: idToOmit ? [idToOmit] : []
      };
      try {
        const items = await postgres.query(getItemsQuery);
        if (!items) throw 'Items were not found.';
        return items.rows;
      } catch (e) {
        throw 'Items were not found.';
      }
    },
    async getItemsForUser(id) {
      const getUsersItemsQuery = {
        text: `SELECT * FROM items WHERE ownerid = $1`,
        values: [id]
      };
      try {
        const usersItems = await postgres.query(getUsersItemsQuery);
        if (!usersItems) throw 'Users items were not found.';
        return usersItems.rows;
      } catch (e) {
        throw 'Users items were not found.';
      }
      return items.rows;
    },
    async getBorrowedItemsForUser(id) {
      const getBorrowedItemsQuery = {
        text: `SELECT * FROM items WHERE borrowerid = $1`,
        values: [id]
      };
      try {
        const borrowedItems = await postgres.query(getBorrowedItemsQuery);
        if (!borrowedItems) throw 'Borrowed items were not found.';
        return borrowedItems.rows;
      } catch (e) {
        throw 'Borrowed items were not found.';
      }
    },
    async getTags() {
      const getTagsQuery = {
        text: `SELECT * FROM tags`
      };
      try {
        const tags = await postgres.query(getTagsQuery);
        if (!tags) throw 'Tags were not found.';
        return tags.rows;
      } catch (e) {
        throw 'Tags were not found.';
      }
    },
    async getTagsForItem(id) {
      const getItemtagsQuery = {
        text: `SELECT * FROM tags INNER JOIN itemtags ON itemtags.tagid = tags.id WHERE itemtags.itemid =$1`, // @TODO: Advanced query Hint: use INNER JOIN
        values: [id]
      };
      try {
        const tags = await postgres.query(getItemtagsQuery);
        if (!tags) throw 'Tags for item were not found.';
        return tags.rows;
      } catch (e) {
        throw 'Tags for item were not found.';
      }
    },
    async saveNewItem({ item, user }) {
      return new Promise((resolve, reject) => {
        // - Read about transactions here: https://node-postgres.com/features/transactions
        postgres.connect((err, client, done) => {
          try {
            // Begin postgres transaction
            client.query('BEGIN', async err => {
              const { title, description, tags } = item;

              const newItemQuery = {
                text: `INSERT INTO items (title, description, ownerid) VALUES ($1, $2, $3) RETURNING * ;`,
                values: [title, description, user]
              };
              const newItem = await postgres.query(newItemQuery);
              //grab the id for the new item to add to itemtags itemid foreign key later
              let newItemId = newItem.rows[0].id;

              const newTags = {
                text: `INSERT INTO itemtags (itemid, tagid) VALUES ${tagsQueryString(
                  [...tags],
                  newItemId,
                  ''
                )}`,
                values: tags.map(tag => tag.id)
              };

              await postgres.query(newTags);

              // Commit the entire transaction!
              client.query('COMMIT', err => {
                if (err) {
                  throw err;
                }
                // release the client back to the pool
                done();
                resolve(newItem.rows[0]);
              });
            });
          } catch (e) {
            // Something went wrong
            client.query('ROLLBACK', err => {
              if (err) {
                throw err;
              }
              // release the client back to the pool
              done();
            });
            switch (true) {
              default:
                throw e;
            }
          }
        });
      });
    }
  };
};
