import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import moment from 'moment';
import {
  Button,
  Box,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  Typography
} from '@material-ui/core';
import Gravatar from 'react-gravatar';
import styles from './styles';

const ItemCard = ({ item, classes }) => {
  return (
    <Card className={classes.card} raised>
      <Link
        href={`/profile/${item && item.itemowner.id}`}
        color="secondary"
        underline="none"
      >
        <CardMedia
          component="img"
          src={
            item && item.imageurl
              ? item.imageurl
              : 'http://via.placeholder.com/350x250?text=No+image'
          }
          className={classes.media}
        />
      </Link>
      <CardContent className={classes.innerCard}>
        <Box className={classes.itemInfoContainer}>
          <Gravatar
            email={item && item.itemowner && item.itemowner.email}
            size={70}
            rating="pg"
            default="retro"
            className={`CustomAvatar-image ${classes.customGravatar}`}
          />
          <Box className={classes.itemInfo}>
            <Link
              href={`/profile/${item && item.itemowner.id}`}
              color="secondary"
            >
              {item && item.itemowner && item.itemowner.fullname}
            </Link>
            <Typography>
              {item &&
                moment(item && item.created)
                  .startOf('day')
                  .fromNow()}
            </Typography>
          </Box>
        </Box>

        <CardContent className={classes.content}>
          <Typography variant="h5">{item && item.title}</Typography>
          {item &&
            item.tags &&
            item.tags.map(tag => {
              return (
                <Typography variant="caption" key={tag.id}>
                  {tag.title}
                </Typography>
              );
            })}
          <Typography>{item && item.description}</Typography>
        </CardContent>

        <CardActions className={classes.buttonContainer} disableSpacing={true}>
          <Button variant="outlined" size="medium" color="secondary">
            Borrow
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(ItemCard);
