import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import styles from './styles';
import ShareItemForm from '../../components/ShareItemForm';
import ShareItemPreview from '../../components/ShareItemPreview';

const Share = ({ classes, tags }) => {
  return (
    <Grid container className={classes.root} justify="space-evenly">
      <Grid item className={classes.gridItem}>
        <ShareItemPreview />
      </Grid>
      <Grid item className={classes.gridItem}>
        <ShareItemForm tags={tags} />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Share);
