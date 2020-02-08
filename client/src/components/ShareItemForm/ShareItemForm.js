import React from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
  withStyles,
  TextField
} from '@material-ui/core';
import styles from './styles';
import { Form, Field, FormSpy } from 'react-final-form';
import { ItemPreviewContext } from '../../context/ItemPreviewProvider';
import { Mutation } from 'react-apollo';
import { ADD_ITEM_MUTATION, VIEWER_QUERY } from '../../apollo/queries';
import HomeIcon from '@material-ui/icons/Home';
import DevicesIcon from '@material-ui/icons/Devices';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import BookIcon from '@material-ui/icons/Book';
import BuildIcon from '@material-ui/icons/Build';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';

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
    const refetchQueries = [{ query: VIEWER_QUERY }];
    const { classes, tags } = this.props;

    return (
      <Mutation mutation={ADD_ITEM_MUTATION} refetchQueries={refetchQueries}>
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
                          name="imageurl"
                          render={({ input, meta }) => (
                            <React.Fragment>
                              <TextField
                                label="Your image URL"
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
                          <Grid container justify="space-between">
                            <Grid item>
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
                            </Grid>
                            <Grid item>
                              <label className={classes.tagIcons}>
                                <Field
                                  name="tags"
                                  component="input"
                                  type="checkbox"
                                  value="Electronics"
                                />
                                Electronics
                                <DevicesIcon />
                              </label>
                            </Grid>
                            <Grid item>
                              <label className={classes.tagIcons}>
                                <Field
                                  name="tags"
                                  component="input"
                                  type="checkbox"
                                  value="Musical Instruments"
                                />
                                Musical Instruments
                                <MusicNoteIcon />
                              </label>
                            </Grid>
                            <Grid item>
                              <label className={classes.tagIcons}>
                                <Field
                                  name="tags"
                                  component="input"
                                  type="checkbox"
                                  value="Sporting Goods"
                                />
                                Sporting Goods
                                <FitnessCenterIcon />
                              </label>
                            </Grid>
                            <Grid item>
                              <label className={classes.tagIcons}>
                                <Field
                                  name="tags"
                                  component="input"
                                  type="checkbox"
                                  value="Tools"
                                />
                                Tools
                                <BuildIcon />
                              </label>
                            </Grid>
                            <Grid item>
                              <label className={classes.tagIcons}>
                                <Field
                                  name="tags"
                                  component="input"
                                  type="checkbox"
                                  value="Recreational Equipment"
                                />
                                Recreational Equipment
                                <MotorcycleIcon />
                              </label>
                            </Grid>
                            <Grid item>
                              <label className={classes.tagIcons}>
                                <Field
                                  name="tags"
                                  component="input"
                                  type="checkbox"
                                  value="Physical Media"
                                />
                                Physical Media
                                <BookIcon />
                              </label>
                            </Grid>
                          </Grid>
                        </Box>
                        <Button
                          className={classes.submitBtn}
                          type="submit"
                          variant="contained"
                          size="medium"
                          disabled={pristine}
                          onSubmit={handleSubmit}
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
