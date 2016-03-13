const webpack = require('webpack');

const config = require('./webpack.config');

module.exports = Object.assign(
  config,
  {
    plugins: [
      ...config.plugins,
      new webpack.optimize.UglifyJsPlugin(),
    ],
  }
);
