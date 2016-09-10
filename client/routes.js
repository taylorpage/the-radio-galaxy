import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, hashHistory, browserHistory, IndexRoute, Redirect} from 'react-router';
import Main from './containers/main/Main';

export default(
  <Route path='/' component={ Main }>
  </Route>
)