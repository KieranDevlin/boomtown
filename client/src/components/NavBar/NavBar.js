import React from 'react';
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Container,
  withStyles
} from '@material-ui/core/';
import { Add, MoreVert } from '@material-ui/icons/';
import styles from './styles';
const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel'
];

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
    <nav className={classes.nav}>
      <img src="../../images/boomtown.svg" />
      <Container>
        <Button size="large" color="secondary">
          <Add color="secondary" />
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
      </Container>
    </nav>
  );
};

// const NavBar = () => {
//   return <h1>navbar</h1>;
// };

export default withStyles(styles)(NavBar);
