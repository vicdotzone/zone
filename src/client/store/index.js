if (process.env.NODE_ENV !== 'production') {
  module.exports = require('./store.dev.js');
} else {
  module.exports = require('./store.prod.js');
}
