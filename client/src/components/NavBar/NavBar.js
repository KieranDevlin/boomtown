import React from 'react';
import logo from '../../images/boomtown.svg';

import {
  AppBar,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  withStyles
} from '@material-ui/core/';
import { Add, MoreVert } from '@material-ui/icons/';
import styles from './styles';
const options = ['Profile', 'Sign'];

const ITEM_HEIGHT = 48;

const NavBar = ({ classes }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar>
        <Toolbar className={classes.nav}>
          <Link href="/home">
            <img src={logo} className={classes.logo} />
          </Link>
          <div>
            <Button
              size="large"
              color="secondary"
              href="/share"
              className={classes.navButton}
            >
              <Add className={classes.addIcon} />
              Share Something
            </Button>
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
              {options.map(option => (
                <MenuItem
                  key={option}
                  selected={option === 'Pyxis'}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(NavBar);
