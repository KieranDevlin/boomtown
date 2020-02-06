import React from 'react';
import {
  Box,
  Button,
  Typography,
  withStyles,
  TextField
} from '@material-ui/core';
import styles from './styles';
import { Form, Field, FormSpy } from 'react-final-form';
import HomeIcon from '@material-ui/icons/Home';
import { ItemPreviewContext } from '../../context/ItemPreviewProvider';
import { Mutation } from 'react-apollo';
import { ADD_ITEM_MUTATION } from '../../apollo/queries';

class ShareItemForm extends React.Component {
  validate = values => {
    const errors = {};

    if (!values.title) {
      errors.title = 'Required';
    }
    if (!values.description) {
      errors.description = 'Required';
    }
    return errors;
  };

  applyTags = (tags, allTags) => {
    return tags.map(tag => {
      const updatedTag = { title: tag };
      allTags.filter(t => {
        if (t.title === tag) {
          updatedTag.id = t.id;
        }
      });
      return updatedTag;
    });
  };

  dispatchUpdate = (values, allTags, updatePreview) => {
    updatePreview({
      ...values,
      tags: this.applyTags(values.tags || [], allTags)
    });
  };
  render() {
    const { classes, tags } = this.props;
    return (
      <Mutation mutation={ADD_ITEM_MUTATION}>
        {addItem => (
          <ItemPreviewContext.Consumer>
            {({ updatePreview, resetPreview }) => (
              <Box className={classes.root}>
                <Typography variant="h2" style={{ fontWeight: 'bold' }}>
                  Share. Borrow. Prosper.
                </Typography>

                <Form
                  onSubmit={async values => {
                    try {
                      await addItem({
                        variables: {
                          item: {
                            ...values,
                            tags: this.applyTags(values.tags || [], tags)
                          }
                        }
                      });
                      resetPreview();
                    } catch (e) {
                      throw new Error(
                        `There was an error adding your item.  + ${e}`
                      );
                    }
                  }}
                  validate={this.validate}
                  render={({ handleSubmit, pristine }) => {
                    return (
                      <form onSubmit={handleSubmit}>
                        <FormSpy
                          subscription={{ values: true }}
                          onChange={({ values }) => {
                            if (values) {
                              this.dispatchUpdate(values, tags, updatePreview);
                            }
                            return '';
                          }}
                        />
                        <Field
                          type="text"
                          name="title"
                          render={({ input, meta }) => (
                            <React.Fragment>
                              <TextField
                                id="standard-basic"
                                label="Name your item"
                                className={classes.fields}
                                {...input}
                              />
                              {meta.error && meta.touched && (
                                <span>{meta.error}</span>
                              )}
                            </React.Fragment>
                          )}
                        />

                        <Field
                          type="text"
                          name="description"
                          render={({ input, meta }) => (
                            <React.Fragment>
                              <TextField
                                id="standard-basic"
                                label="Describe your item"
                                className={classes.fields}
                                {...input}
                              />
                              {meta.error && meta.touched && (
                                <span>{meta.error}</span>
                              )}
                            </React.Fragment>
                          )}
                        />

                        <Box className={classes.fields}>
                          <Typography variant="h6">Add Tags:</Typography>
                          <label className={classes.tagIcons}>
                            <Field
                              name="tags"
                              component="input"
                              type="checkbox"
                              value="Household Items"
                            />
                            Household Items
                            <HomeIcon />
                          </label>
                          <label className={classes.tagIcons}>
                            <Field
                              name="tags"
                              component="input"
                              type="checkbox"
                              value="Electronics"
                            />
                            Electronics
                            <HomeIcon />
                          </label>
                          <label className={classes.tagIcons}>
                            <Field
                              name="tags"
                              component="input"
                              type="checkbox"
                              value="Musical Instruments"
                            />
                            Musical Instruments
                            <HomeIcon />
                          </label>
                          <label className={classes.tagIcons}>
                            <Field
                              name="tags"
                              component="input"
                              type="checkbox"
                              value="Sporting Goods"
                            />
                            Sporting Goods
                            <HomeIcon />
                          </label>
                          <label className={classes.tagIcons}>
                            <Field
                              name="tags"
                              component="input"
                              type="checkbox"
                              value="Tools"
                            />
                            Tools
                            <HomeIcon />
                          </label>
                          <label className={classes.tagIcons}>
                            <Field
                              name="tags"
                              component="input"
                              type="checkbox"
                              value="Recreational Equipment"
                            />
                            Recreational Equipment
                            <HomeIcon />
                          </label>
                          <label className={classes.tagIcons}>
                            <Field
                              name="tags"
                              component="input"
                              type="checkbox"
                              value="Physical Media"
                            />
                            Physical Media
                            <HomeIcon />
                          </label>
                        </Box>
                        <Button
                          className={classes.submitBtn}
                          type="submit"
                          variant="contained"
                          size="medium"
                          disabled={pristine}
                        >
                          SHARE
                        </Button>
                      </form>
                    );
                  }}
                />
              </Box>
            )}
          </ItemPreviewContext.Consumer>
        )}
      </Mutation>
    );
  }
}

export default withStyles(styles)(ShareItemForm);
