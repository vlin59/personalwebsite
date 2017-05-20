import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, hashHistory, browserHistory, IndexRoute, Redirect} from 'react-router';
import App from './App';

import Home from './Home';
import Projects from './Projects';

export default(
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/projects' component={Projects} />
  </Route>
  )