import React from 'react';
import logo from '../../images/boomtown.svg';
import { withRouter } from 'react-router-dom';
import {
  AppBar,
  Button,
  IconButton,
  Link,
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

const options = [
  { id: 0, icon: Fingerprint, label: 'Profile', path: '/profile' },
  { id: 1, icon: PowerSettingsNew, label: 'Sign Out', path: '/home' }
];

const ITEM_HEIGHT = 48;

const NavBar = ({ classes, location }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = value => {
    console.log(value);
    setAnchorEl(null);
  };

  return (
    <Slide in={location.pathname !== '/home'}>
      <AppBar>
        <Toolbar className={classes.nav}>
          <Link href="/items">
            <img
              src={logo}
              className={classes.logo}
              alt="BoomTown logo - return to home."
            />
          </Link>
          <div>
            <Slide in={location.pathname !== '/share'}>
              <Button
                size="large"
                color="secondary"
                href="/share"
                className={classes.navButton}
              >
                <Add className={classes.addIcon} />
                Share Something
              </Button>
            </Slide>

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
                  width: 200
                }
              }}
            >
              {options.map(option => {
                let IconComponent = option.icon;
                return (
                  <Link key={option.id} href={option.path} color="secondary">
                    <MenuItem
                      selected={option === 'Profile'}
                      onClick={handleClose}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <IconComponent />
                      {option.label}
                    </MenuItem>
                  </Link>
                );
              })}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default withRouter(withStyles(styles)(NavBar));
