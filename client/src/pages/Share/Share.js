import React from 'react';
import { Container, withStyles, Grid } from '@material-ui/core';
import styles from './styles';
import ShareItemForm from '../../components/ShareItemForm';
import ShareItemPreview from '../../components/ShareItemPreview';
import PropTypes from 'prop-types';

const Share = ({ classes, tags, viewer }) => {
  return (
    <Container className={classes.root}>
      <Grid container spacing={6} justify="space-evenly">
        <Grid item xs={5} md={5} lg={5}>
          <ShareItemPreview viewer={viewer} />
        </Grid>
        <Grid item xs={5} md={5} lg={5}>
          <ShareItemForm tags={tags} />
        </Grid>
      </Grid>
    </Container>
  );
};
Share.propTypes = {
  classes: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired,
  viewer: PropTypes.object.isRequired
};
export default withStyles(styles)(Share);
