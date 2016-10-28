import React from 'react';
import { Route, IndexRoute } from 'react-router';
import TippApp from './components/TippApp';
import Main from './containers/Main';
import Stats from './containers/Stats';
import TestComponent from './components/TestComponent';

export default (
  <Route path="/" component={TippApp}>
    <IndexRoute component={Main}/>
    <Route path="stats" component={Stats}/>
  </Route>
);
