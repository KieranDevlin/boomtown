import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import Items from '../pages/Items';
import Home from '../pages/Home';
import Share from '../pages/Share';
import Profile from '../pages/Profile';
import NavBar from '../components/NavBar';

export default () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/items" component={Items} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route exact path="/share" component={Share} />
      <Redirect from="*" to="/items" />
      {/**
       * Later, we'll add logic to send users to one set of routes if they're logged in,
       * or only view the /welcome page if they are not.
       */}
    </Switch>
  </Fragment>
);
