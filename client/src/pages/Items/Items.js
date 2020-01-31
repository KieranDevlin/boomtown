import React from 'react';
import { Container, withStyles } from '@material-ui/core/';
import styles from './styles';
import ItemsGrid from '../../components/ItemsGrid/ItemsGrid';

const Items = ({ classes, items }) => {
  return (
    <Container maxWidth="lg" className={classes.root}>
      <ItemsGrid items={items} />
    </Container>
  );
};

export default withStyles(styles)(Items);
