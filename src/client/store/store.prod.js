import { createStore } from 'redux';
import reducer from '../reducer';

module.exports = (initialState) => {
  const store = createStore(reducer, initialState);
  return store;
};
