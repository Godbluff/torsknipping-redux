import React from 'react';
import { Route, IndexRoute } from 'react-router';
import TippApp from './components/TippApp';
import Main from './containers/Main';
import Lotto from './containers/Lotto';
import Stats from './containers/Stats';
import Front from './components/Front';

export default (
  <Route path="/" component={TippApp}>
    <IndexRoute component={Front}/>
    <Route path="main" component={Main}>
      <IndexRoute component={Lotto}/>
      <Route path="stats" component={Stats}/>
    </Route>
  </Route>
);
