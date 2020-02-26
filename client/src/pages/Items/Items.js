import React from 'react';
import { Box, withStyles } from '@material-ui/core/';
import styles from './styles';
import ItemsGrid from '../../components/ItemsGrid';
import PropTypes from 'prop-types';

const Items = ({ classes, items }) => {
  return (
    <Box className={classes.root}>
      <ItemsGrid items={items} />
    </Box>
  );
};

Items.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
};
export default withStyles(styles)(Items);
