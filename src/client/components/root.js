import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import Router from './router';

import App from './app';
import Landing from './landing';
import Quiz from './quiz';

export default class Root extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={App}>
          <IndexRoute component={Landing} />
          <Route path="quiz" component={Quiz} />
        </Route>
      </Router>
    );
  }
}
