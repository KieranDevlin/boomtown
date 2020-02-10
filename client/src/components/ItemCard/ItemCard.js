import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import moment from 'moment';
import { Link, withRouter } from 'react-router-dom';
import {
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Zoom
} from '@material-ui/core';
import Gravatar from 'react-gravatar';
import styles from './styles';
import PropTypes from 'prop-types';

const ItemCard = ({ item, classes, viewer, location }) => {
  return (
    <Zoom in={true}>
      <Card className={classes.card} raised>
        <Link
          to={`/profile/${
            viewer ? viewer.id : item && item.itemowner && item.itemowner.id
          }`}
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
              email={
                viewer
                  ? viewer.email
                  : item && item.itemowner && item.itemowner.email
              }
              size={70}
              rating="pg"
              default="retro"
              className={`CustomAvatar-image ${classes.customGravatar}`}
            />
            <Box className={classes.itemInfo}>
              <Link
                to={`/profile/${
                  viewer
                    ? viewer.id
                    : item && item.itemowner && item.itemowner.id
                }`}
                color="secondary"
              >
                {viewer
                  ? viewer.fullname
                  : item && item.itemowner && item.itemowner.fullname}
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
            <Box>
              {item &&
                item.tags &&
                item.tags.map(tag => {
                  return (
                    <Typography
                      variant="caption"
                      key={tag.id}
                      className={classes.tags}
                    >
                      {tag.title}
                    </Typography>
                  );
                })}
            </Box>
            <Typography>{item && item.description}</Typography>
          </CardContent>

          {location.pathname === '/items' && (
            <CardActions className={classes.buttonContainer}>
              <Button variant="outlined" size="medium" color="secondary">
                Borrow
              </Button>
            </CardActions>
          )}
        </CardContent>
      </Card>
    </Zoom>
  );
};

ItemCard.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  viewer: PropTypes.object
};

export default withRouter(withStyles(styles)(ItemCard));
