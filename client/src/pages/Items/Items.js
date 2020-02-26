import React from 'react';
import { Container, withStyles, Container } from '@material-ui/core/';
import styles from './styles';
import ItemsGrid from '../../components/ItemsGrid';
import PropTypes from 'prop-types';

const Items = ({ classes, items }) => {
  return (
    <Container maxWidth="xl" className={classes.root}>
      <ItemsGrid items={items} />
    </Container>
  );
};

Items.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
};
export default withStyles(styles)(Items);
