const path = require('path');
const express = require('express');
const webpack = require('webpack');

const STATIC_PATH = path.join(__dirname, '../../build/');

const PORT = process.env.PORT || 8080;

const app = express();

if (process.env.NODE_ENV !== 'production') {
  console.log('webpack dev middleware');
  const config = require('../../webpack.config');

  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.use('/static', express.static(STATIC_PATH));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening at http://localhost:${PORT}`);
});
