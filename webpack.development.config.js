const config = require('./webpack.config');

module.exports = Object.assign(
  config,
  {
    entry: [
      ...config.entry,
      'eventsource-polyfill', // necessary for hot reloading with IE
    ],
    devtool: 'cheap-module-eval-source-map',
  }
);
