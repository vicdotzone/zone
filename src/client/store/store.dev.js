import { createStore } from 'redux';
import reducer from '../reducer';
import DevTools from '../components/dev-tools';

module.exports = (initialState) => {
  const store = createStore(reducer, initialState, DevTools.instrument());

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducer', () =>
      store.replaceReducer(require('../reducer'))
    );
  }

  return store;
};
