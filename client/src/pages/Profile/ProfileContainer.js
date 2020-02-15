import React, { Component } from 'react';
import Profile from './Profile';
import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from 'react-apollo';
import { ALL_USER_ITEMS_QUERY } from '../../apollo/queries';
import { ViewerContext } from '../../context/ViewerProvider';
import PropTypes from 'prop-types';

class ProfileContainer extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <ViewerContext.Consumer>
        {({ viewer, loading }) => {
          if (loading) return <FullScreenLoader />;
          return (
            <Query
              query={ALL_USER_ITEMS_QUERY}
              variables={{ id: id || viewer.id }}
              fetchPolicy="network-only"
            >
              {({ loading, error, data }) => {
                const { user } = data;
                if (loading) return <FullScreenLoader />;
                if (error) return `Error! ${error.message}`;
                if (data) return <Profile user={user} />;
              }}
            </Query>
          );
        }}
      </ViewerContext.Consumer>
    );
  }
}

ProfileContainer.propTypes = {
  match: PropTypes.object.isRequired
};

export default ProfileContainer;
