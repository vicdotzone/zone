require('./app');

if (process.env.NODE_ENV !== 'production') {
  require('./dev-server');
}
