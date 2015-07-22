'use strict';

/**
 * Main application file
 */

var koa    = require('koa');
var config = require('./config/config');

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Setup koa
var app = koa();
require('./router')(app);
app.listen(config.port, config.ip, function () {
  console.log('Koa server listening on %s:%d, in %s mode', config.ip, config.port, process.env.NODE_ENV);
});
