import React, { Component } from 'react';
import Share from './Share';
import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from 'react-apollo';
import { ALL_TAGS_QUERY } from '../../apollo/queries';
import { ViewerContext } from '../../context/ViewerProvider';

class ShareContainer extends Component {
  render() {
    return (
      <ViewerContext.Consumer>
        {({ viewer, loading }) => {
          if (loading) return <FullScreenLoader />;
          return (
            <Query query={ALL_TAGS_QUERY}>
              {({ loading, error, data }) => {
                if (loading) return <FullScreenLoader />;
                if (error) return `Error! ${error.message}`;
                if (data) return <Share tags={data.tags} viewer={viewer} />;
              }}
            </Query>
          );
        }}
      </ViewerContext.Consumer>
    );
  }
}
export default ShareContainer;
