import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import reducer from '../reducer';

module.exports = (initialState) => {
  const enhancer = applyMiddleware(thunk, routerMiddleware(browserHistory));
  const store = createStore(reducer, initialState, enhancer);
  return store;
};
