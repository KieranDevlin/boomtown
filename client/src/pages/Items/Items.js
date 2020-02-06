import React from 'react';
import { Container, withStyles } from '@material-ui/core/';
import styles from './styles';
import ItemsGrid from '../../components/ItemsGrid';
const Items = ({ classes, items }) => {
  return (
    <Container className={classes.root}>
      <ItemsGrid items={items} />
    </Container>
  );
};

export default withStyles(styles)(Items);
