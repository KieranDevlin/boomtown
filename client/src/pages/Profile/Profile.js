import React from 'react';
import styles from './styles';
import {
  Box,
  Card,
  Container,
  Grid,
  Typography,
  withStyles
} from '@material-ui/core';
import Gravatar from 'react-gravatar';
import ItemCard from '../../components/ItemCard';
import PropTypes from 'prop-types';

const Profile = ({ user, classes, viewer }) => {
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Card className={classes.profileMain}>
        <Container className={classes.user} xs={12}>
          <Gravatar
            email={user.email}
            size={70}
            rating="pg"
            default="retro"
            className={classes.customGravatar}
          />
          <Typography variant="h4">{user.fullname}</Typography>
        </Container>
        <Typography variant="h6">
          <span className={classes.profileNumbers}>
            {user.items.length}&nbsp;
          </span>
          Items shared,&nbsp;
          <span className={classes.profileNumbers}>
            {user.borrowed.length}&nbsp;
          </span>
          Items borrowed
        </Typography>
        {user.bio ? (
          <Typography>{user.bio}</Typography>
        ) : (
          <Typography>"No user bio"</Typography>
        )}
      </Card>
      {user.items.length ? (
        <Container className={classes.sharedItems}>
          <Typography variant="h4" color="primary">
            Shared Items
          </Typography>

          <Grid container spacing={6}>
            {user.items.map(item => (
              <Grid item key={item.id} sm={12} md={6} lg={4}>
                <ItemCard item={item} viewer={viewer} />
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : null}
      {user.borrowed.length ? (
        <Container className={classes.sharedItems}>
          <Typography variant="h4" color="primary">
            Borrowed Items
          </Typography>

          <Grid container spacing={6}>
            {user.borrowed.map(item => (
              <Grid item key={item.id} sm={12} md={6} lg={4}>
                <ItemCard item={item} viewer={viewer} />
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : null}
    </Container>
  );
};
Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};
export default withStyles(styles)(Profile);
