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

const ItemsGrid = ({ items }) => {
  return (
    <Grid container justify="center" spacing={6}>
      {items.map(item => (
        <Grid item key={item.id}>
          <ItemCard
            title={item.title}
            imageurl={item.imageurl}
            description={item.description}
            created={item.created}
            tags={item.tags}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(ItemsGrid);
