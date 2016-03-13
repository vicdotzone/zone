import React, { Component, PropTypes } from 'react';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

export default class ConnectedRouter extends Component {
  constructor(props, context) {
    super(props, context);

    const { store } = context;

    this.history = syncHistoryWithStore(browserHistory, store);
  }

  render() {
    return <Router history={this.history} {...this.props} />;
  }
}

ConnectedRouter.contextTypes = {
  store: PropTypes.object.isRequired,
};
