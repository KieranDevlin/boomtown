import React from 'react';
import {
  Grid,
  CircularProgress,
  Typography,
  Fade,
  withStyles
} from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';

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

FullScreenLoader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullScreenLoader);
