import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import Router from './router';

import App from './app';
import Landing from './landing';
import Quiz from './quiz.connect';
import Result from './result';

let DevTools;

if (process.env.NODE_ENV !== 'production') {
  DevTools = require('./dev-tools').default;
}

export default class Root extends Component {
  render() {
    return (
      <div>
        {DevTools && <DevTools />}
        <Router>
          <Route path="/" component={App}>
            <IndexRoute component={Landing} />
            <Route path="quiz" component={Quiz} />
            <Route path="result" component={Result} />
          </Route>
        </Router>
      </div>
    );
  }
}
