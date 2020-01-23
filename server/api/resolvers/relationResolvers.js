const { ApolloError } = require('apollo-server');

const relationResolvers = {
  User: {
    /**
     *  @TODO: Advanced resolvers
     *
     *  The User GraphQL type has two fields that are not present in the
     *  user table in Postgres: items and borrowed.
     *
     *  According to our GraphQL schema, these fields should return a list of
     *  Items (GraphQL type) the user has lent (items) and borrowed (borrowed).
     *
     */
    // @TODO: Uncomment these lines after you define the User type with these fields
    // items() {
    //   // @TODO: Replace this mock return statement with the correct items from Postgres
    //   return []
    //   // -------------------------------
    // },
    // borrowed() {
    //   // @TODO: Replace this mock return statement with the correct items from Postgres
    //   return []
    //   // -------------------------------
    // }
    // -------------------------------
  },

  Item: {
    async itemowner({ ownerid }, args, { pgResource }, info) {
      try {
        const items = await pgResource.getUserById(ownerid);
        return items;
      } catch (e) {
        return new ApolloError(e);
      }
    },
    async tags({ id }, args, { pgResource }, info) {
      try {
        const tags = await pgResource.getTagsForItem(id);
        return tags;
      } catch (e) {
        return new ApolloError(e);
      }
    },
    async borrower({ borrowerid }, args, { pgResource }, info) {
      console.log(borrowerid);
      try {
        const tags = await pgResource.getUserById(borrowerid);
        return tags;
      } catch (e) {
        return new ApolloError(e);
      }
    }
  }
};

module.exports = relationResolvers;
