const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('../../webpack.development.config');

const devServer = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
});

devServer.listen(
  process.env.PORT || 8080,
  process.env.IP || 'localhost',
  (err) => {
    if (err) {
      console.error(err);
    }
    console.log('Listening at localhost:3000');
  }
);
