import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, browserHistory, IndexRoute, Redirect} from 'react-router';
import Main from './containers/main/Main';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Articles from './components/articles/Articles';
import TopTracks from './components/topTracks/TopTracks';
import Marquee from './components/featured/Marquee';
import Tracks from './components/tracks/Tracks';
import AdminPage from '../admin/components/AdminPage';

export default(
  <Router>
    <Route path='/' component={ Main }/>
    <Route path='/login' component={ Login }/>
    <Route path='/signup' component={ Signup }/>
    <Route path='/articles' component={ Articles }/>
    <Route path='/TopTracks' component={ TopTracks }/>
    <Route path='/Marquee' component={ Marquee }/>
    <Route path='/Tracks' component={ Tracks }/>
    <Route path='/admin' component={ AdminPage }/>
  </Router>
)