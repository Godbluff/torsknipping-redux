import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router , browserHistory } from 'react-router';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-86750634-1');

const store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function fireTracking() {
  ReactGA.pageview(window.location.hash);
}
render(
  <Provider store={store}>
    <Router onUpdate={fireTracking} history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);


