import React, { Component } from 'react';
import Items from './Items';
import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from 'react-apollo';
import { ALL_ITEMS_QUERY } from '../../apollo/queries';
import { ViewerContext } from '../../context/ViewerProvider';

class ItemsContainer extends Component {
  render() {
    return (
      <ViewerContext.Consumer>
        {({ viewer, loading }) => {
          if (loading) return <FullScreenLoader />;
          return (
            <Query query={ALL_ITEMS_QUERY} variables={{ filter: viewer.id }}>
              {({ loading, error, data }) => {
                const { items } = data;
                if (loading) return <FullScreenLoader />;
                if (error) return `Error! ${error.message}`;
                return <Items items={items} />;
              }}
            </Query>
          );
        }}
      </ViewerContext.Consumer>
    );
  }
}

export default ItemsContainer;
