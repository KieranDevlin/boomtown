import React from 'react';
import {
  Grid,
  CircularProgress,
  Typography,
  Fade,
  withStyles
} from '@material-ui/core';
import styles from './styles';

const FullScreenLoader = ({ classes }) => {
  return (
    <Fade in={true} className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center">
        <CircularProgress />
        <Typography color="primary">
          "For it is giving that we recieve."
        </Typography>
      </Grid>
    </Fade>
  );
};

export default withStyles(styles)(FullScreenLoader);
