import React from 'react';
import ItemCard from '../ItemCard';
import { ItemPreviewContext } from '../../context/ItemPreviewProvider';

const ShareItemPreview = ({ viewer }) => {
  return (
    <ItemPreviewContext.Consumer>
      {({ state }) => <ItemCard item={state} viewer={viewer} />}
    </ItemPreviewContext.Consumer>
  );
};

export default ShareItemPreview;
