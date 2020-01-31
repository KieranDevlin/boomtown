import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia
} from '@material-ui/core';

import styles from './styles';

const ItemCard = ({
  id,
  title,
  imageurl,
  description,
  created,
  tags,
  classes
}) => {
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} style={{ backgroundColor: 'blue' }}>
        {/* <img src={imageurl}></img> */}
      </CardMedia>
      <CardContent className={classes.innerCard}>
        <Avatar
          className={classes.user}
          alt="Remy Sharp"
          src="https://cdn.auth0.com/blog/react-js/react.png"
        />
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
