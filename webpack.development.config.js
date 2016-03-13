const config = require('./webpack.config');

const port = process.env.PORT || 8080;
const host = process.env.IP || '127.0.0.1';

module.exports = Object.assign(
  config,
  {
    entry: [
      ...config.entry,
      'eventsource-polyfill', // necessary for hot reloading with IE
    ],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      port,
      host,
    },
  }
);
