import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// Can go away when react 1.0 release
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Root from './components/root';
import createStore from './store';

const store = createStore();

// Render the main component into the dom
const rootEl = document.getElementById('app');
ReactDOM.render(<Provider store={store}><Root /></Provider>, rootEl);
