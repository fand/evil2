'use strict';

var route = require('koa-route');
var mount = require('koa-mount');
var views = require('co-views');
var serve = require('koa-static');

var render = views(__dirname + '/views', { map : { html : 'handlebars' } });

var index = function* () {
  this.body = yield render('index');
};

/**
 * Application routes
 */
module.exports = function (app) {
  app.use(route.get('/', index));
  app.use(mount('/public', serve(__dirname + '/../public')));
};
