gulp       = require 'gulp'
gutil      = require 'gulp-util'
gulpif     = require 'gulp-if'
browserify = require 'browserify'
watchify   = require 'watchify'
source     = require 'vinyl-source-stream'
reload     = require('browser-sync').reload
config     = require('../config').browserify
notify = require '../utils/notify'

babelify = require 'babelify'
envify   = require 'envify'

##
# util
# ______________________________________

is_dev = true
is_watching = false

# Call cb after called num times.
counter = (num, callback) ->
    called = 0
    return ->
        called += 1
        callback() if called == num

# Bundle each config
babel = (c, callback) ->
    bundler = browserify
        entries: c.src,
        debug: is_dev,
        cache: {}, packageCache: {}, fullPaths: true

    bundler.transform babelify.configure({
        stage: 0
    })

    bundler.transform envify

    console.log '#### browserify: rebuild'

    bundler.bundle()
        .on 'error', (e) -> console.log(e);notify.error('Compile Error')
        .pipe source c.name
        .pipe gulp.dest c.dst
        .pipe gulpif is_watching, reload stream: true

    callback()

##
# Tasks
# ______________________________________

gulp.task 'browserify', (cb) ->
    is_dev = false if process.env.NODE_ENV == 'production'
    count = counter(config.length, cb)
    babel(c, count) for c in config

gulp.task 'browserify-watch', ->
    is_watching = true
    gulp.start 'browserify'
