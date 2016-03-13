import injectTapEventPlugin from 'react-tap-event-plugin';
//Needed for onTouchTap
//Can go away when react 1.0 release
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

// Render the main component into the dom
var rootEl = document.getElementById('app');
ReactDOM.render(<App />, rootEl);
