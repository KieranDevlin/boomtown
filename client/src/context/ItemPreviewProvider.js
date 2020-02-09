import React from 'react';
import PropTypes from 'prop-types';

export const ItemPreviewContext = React.createContext();

const initialState = {
  imageurl: 'http://via.placeholder.com/350x250?text=Please+select+an+image',
  itemowner: {},
  created: new Date(),
  title: 'Example item title',
  description: 'Example item description',
  tags: []
};

const ItemPreviewProvider = props => {
  //React hook 'item' uses 'setItem' to update its state
  const [item, setItem] = React.useState(initialState);

  const resetPreview = () => {
    setItem(initialState);
  };

  const updatePreview = itemInput => {
    const newItem = { ...item, ...itemInput };
    setItem(newItem);
  };
  return (
    <ItemPreviewContext.Provider
      value={{
        state: item,
        resetPreview: resetPreview,
        updatePreview: updatePreview
      }}
    >
      {props.children}
    </ItemPreviewContext.Provider>
  );
};

ItemPreviewProvider.propTypes = {
  children: PropTypes.object.isRequired
};
export default ItemPreviewProvider;
