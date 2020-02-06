import React from 'react';

export const ItemPreviewContext = React.createContext();

const initialState = {
  imageurl: 'http://via.placeholder.com/350x250?text=Please+select+an+image',
  itemowner: {},
  created: new Date(),
  title: 'Dummy Title',
  description: 'Dummy description',
  tags: []
};

const ItemPreviewProvider = props => {
  //React hook 'item' uses 'setItem' to update its state
  const [item, setItem] = React.useState(initialState);

  const resetPreview = () => {
    setItem({ item: initialState });
  };

  const updatePreview = itemInput => {
    const newItem = { item: { ...item, ...itemInput } };
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

export default ItemPreviewProvider;
