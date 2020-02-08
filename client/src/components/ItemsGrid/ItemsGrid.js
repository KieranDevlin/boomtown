import { withStyles, Grid } from '@material-ui/core';
import React from 'react';
import styles from './styles';
import ItemCard from '../ItemCard';

const ItemsGrid = ({ items }) => {
  return (
    <Grid container spacing={6}>
      {items.map(item => (
        <Grid item key={item.id} sm={12} md={6} lg={4}>
          <ItemCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(ItemsGrid);
