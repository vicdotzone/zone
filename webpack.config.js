const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PROD = process.env.NODE_ENV === 'production';

module.exports = {
  entry: [
    ...PROD ? [] : [
      'eventsource-polyfill',
      'webpack-hot-middleware/client',
    ],
    'normalize.css',
    './src/client/styles/app.css',
    './src/client/index',
  ],
  devtool: PROD ? '' : 'cheap-module-eval-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
      },
      {
        test: /\.yaml$/,
        loaders: ['json', 'yaml'],
      },
    ],
  },
  resolve: {
    root: path.resolve('./src'),
  },
  plugins: [
    ...PROD
      ? [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production'),
          },
        }),
        new webpack.optimize.UglifyJsPlugin({
          compressor: {
            warnings: false,
          },
        }),
      ]
      : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
      ],
    new ExtractTextPlugin('styles.css'),
  ],
};
