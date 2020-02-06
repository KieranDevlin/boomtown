import { withStyles } from '@material-ui/core';
import React from 'react';
import styles from './styles';
import ItemCard from '../ItemCard';
import { ItemPreviewContext } from '../../context/ItemPreviewProvider';

const ShareItemPreview = ({ classes }) => {
  return (
    <ItemPreviewContext.Consumer>
      {({ state }) => (
        <div className={classes.root}>
          <ItemCard item={state.item} />
        </div>
      )}
    </ItemPreviewContext.Consumer>
  );
};

export default withStyles(styles)(ShareItemPreview);
