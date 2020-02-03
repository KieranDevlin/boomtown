import {
  withStyles,
  Grid,
  Input,
  InputLabel,
  Typography
} from '@material-ui/core';
import React from 'react';
import styles from './styles';
import ItemCard from '../ItemCard';

const ShareItemPreview = ({ items, classes }) => {
  return (
    <div className={classes.root}>
      <p>test text </p>
    </div>
  );
};

export default withStyles(styles)(ShareItemPreview);
