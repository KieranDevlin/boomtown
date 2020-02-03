import React, { Component } from 'react';
import {
  Checkbox,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  makeStyles,
  Select,
  Typography,
  withStyles,
  TextField,
  FormControl
} from '@material-ui/core';
import styles from './styles';
import { mergeClasses, useTheme } from '@material-ui/styles';
import { Form, Field } from 'react-final-form';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

// function getStyles(name, tagTitle, theme) {
//   return {
//     fontWeight:
//       tagTitle.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium
//   };
// }

const ShareForm = ({ classes, tags }) => {
  const theme = useTheme();
  const [tagTitle, settagTitle] = React.useState([]);

  const handleChange = event => {
    settagTitle(event.target.value);
  };
  const onSubmit = values => {
    console.log(values);
  };
  // handleSubmit = () => {
  //   console.log('poopoo');
  // };

  return (
    <div className={classes.root}>
      <Typography variant="h2">Share. Borrow. Prosper.</Typography>
      <Form
        onSubmit={onSubmit}
        // validate={this.validate}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Field
                type="text"
                name="item"
                render={({ input, meta }) => (
                  <React.Fragment>
                    <TextField
                      id="standard-basic"
                      label="Name your item"
                      style={{ width: '100%' }}
                      // className={classes.textFields}
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </React.Fragment>
                )}
              />
              <Field
                type="text"
                name="description"
                render={({ input, meta }) => (
                  <React.Fragment>
                    <TextField
                      id="standard-basic"
                      label="Describe your item"
                      style={{ width: '100%' }}
                      // className={classes.textFields}
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </React.Fragment>
                )}
              />
            </form>
          );
        }}
      />

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
        <Select
          labelid="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={tagTitle}
          onChange={handleChange}
          input={<Input />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {tags.map(tag => (
            <MenuItem key={tag.id} value={tag.title}>
              <Checkbox checked={tagTitle.indexOf(tag.id) > -1} />
              <ListItemText primary={tag.title} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
  // }
};

export default withStyles(styles)(ShareForm);

{
  /*               
          <TextField
            id="standard-basic"
            label="Name your item"
            style={{ width: '100%' }}
          />
          <TextField
            id="standard-basic"
            label="Describe your item"
            style={{ width: '100%' }}
          /> */
}
