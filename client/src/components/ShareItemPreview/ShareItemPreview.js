import React from 'react';
import ItemCard from '../ItemCard';
import { ItemPreviewContext } from '../../context/ItemPreviewProvider';
import PropTypes from 'prop-types';

const ShareItemPreview = ({ viewer }) => {
  return (
    <ItemPreviewContext.Consumer>
      {({ state }) => <ItemCard item={state} viewer={viewer} />}
    </ItemPreviewContext.Consumer>
  );
};

ShareItemPreview.propTypes = {
  viewer: PropTypes.object.isRequired
};
export default ShareItemPreview;
