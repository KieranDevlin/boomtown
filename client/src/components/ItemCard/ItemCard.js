import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia
} from '@material-ui/core';
import Gravatar from 'react-gravatar';
import styles from './styles';

const ItemCard = ({
  id,
  title,
  imageurl,
  description,
  created,
  tags,
  classes,
  itemowner
}) => {
  const date = moment(created)
    .startOf('day')
    .fromNow();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        style={{
          background: `url(https://picsum.photos/400/300)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></CardMedia>
      <CardContent className={classes.innerCard}>
        <div style={{ display: 'flex', alignContent: 'center' }}>
          <Gravatar
            email={itemowner.email}
            size={80}
            rating="pg"
            default="monsterid"
            className="CustomAvatar-image"
            style={{ borderRadius: 50, marginRight: 20 }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Typography>{itemowner.fullname}</Typography>
            <Typography>{date}</Typography>
          </div>
        </div>

        {/* <Avatar
          className={classes.user}
          alt="Remy Sharp"
          src="https://cdn.auth0.com/blog/react-js/react.png"
        /> */}
        <CardContent className={classes.content}>
          <Typography variant="h5">{title}</Typography>
          {tags.map(tag => {
            return (
              <Typography variant="caption" key={tag.id}>
                {tag.title}
              </Typography>
            );
          })}
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions style={{ padding: 0 }}>
          <Button variant="outlined" size="medium" color="secondary">
            Borrow
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(ItemCard);
