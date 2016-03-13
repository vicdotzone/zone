import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import reducer from '../reducer';
import DevTools from '../components/dev-tools';

module.exports = (initialState) => {
  const enhancer = compose(
    applyMiddleware(thunk, routerMiddleware(browserHistory)),
    DevTools.instrument()
  );
  const store = createStore(reducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducer', () =>
      store.replaceReducer(require('../reducer'))
    );
  }

  return store;
};
