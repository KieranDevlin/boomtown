import React from 'react';
import logo from '../../images/boomtown.svg';
import { withRouter, NavLink, Link } from 'react-router-dom';
import {
  AppBar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  withStyles,
  Slide
} from '@material-ui/core/';
import {
  Add,
  MoreVert,
  Fingerprint,
  PowerSettingsNew
} from '@material-ui/icons/';
import styles from './styles';
import { Mutation } from 'react-apollo';
import { LOGOUT_MUTATION, VIEWER_QUERY } from '../../apollo/queries';

const ITEM_HEIGHT = 48;

const NavBar = ({ classes, location }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = value => {
    setAnchorEl(null);
  };

  const refetchQueries = [{ query: VIEWER_QUERY }];

  return (
    <Mutation mutation={LOGOUT_MUTATION} refetchQueries={refetchQueries}>
      {logout => {
        return (
          <Slide in={location.pathname !== '/home'}>
            <AppBar>
              <Toolbar className={classes.nav}>
                <NavLink to="/items">
                  <Button className={classes.navButton}>
                    <img
                      src={logo}
                      className={classes.logo}
                      alt="BoomTown logo - return to Items."
                    />
                  </Button>
                </NavLink>
                <Box>
                  <NavLink to="/share">
                    <Slide in={location.pathname !== '/share'}>
                      <Button
                        size="large"
                        color="secondary"
                        className={classes.navButton}
                      >
                        <Add className={classes.addIcon} />
                        Share Something
                      </Button>
                    </Slide>
                  </NavLink>

                  <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVert />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: 125
                      }
                    }}
                  >
                    <Link to="/profile">
                      <MenuItem
                        onClick={handleClose}
                        color="primary"
                        className={classes.menuItems}
                      >
                        <Fingerprint />
                        Profile
                      </MenuItem>
                    </Link>

                    <MenuItem onClick={logout} className={classes.menuItems}>
                      <PowerSettingsNew />
                      Sign Out
                    </MenuItem>
                  </Menu>
                </Box>
              </Toolbar>
            </AppBar>
          </Slide>
        );
      }}
    </Mutation>
  );
};

export default withRouter(withStyles(styles)(NavBar));
