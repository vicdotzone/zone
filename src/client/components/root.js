import React, { Component, PropTypes } from 'react';
import { Route, IndexRoute } from 'react-router';

import Router from './router';

import App from './app';
import Landing from './landing.connect';
import Quiz from './quiz.connect';
import Result from './result.connect';
import Trashmap from './trashmap';

let DevTools;

if (process.env.NODE_ENV !== 'production') {
  DevTools = require('./dev-tools').default;
}

export default class Root extends Component {
  render() {
    const { onEnterQuiz, onEnterResult } = this.props;
    return (
      <div>
        {DevTools && <DevTools />}
        <Router>
          <Route path="/" component={App}>
            <IndexRoute component={Landing} />
            <Route path="quiz" component={Quiz} onEnter={onEnterQuiz} />
            <Route path="result" component={Result} onEnter={onEnterResult} />
            <Route path="trashmap" component={Trashmap} />
          </Route>
        </Router>
      </div>
    );
  }
}

Root.propTypes = {
  onEnterQuiz: PropTypes.func.isRequired,
  onEnterResult: PropTypes.func.isRequired,
};
