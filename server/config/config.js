'use strict';

var _ = require('lodash');

/**
 * Load environment configuration
 */
module.exports = _.merge(
  require('./env/all.js'),
  process.env.NODE_ENV ? require('./env/' + process.env.NODE_ENV + '.js') : {}
);
