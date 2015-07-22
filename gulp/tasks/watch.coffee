gulp   = require 'gulp'
config = require('../config').watch

gulp.task 'watch', ['browserSync'], ->
    gulp.watch config.server, ['pm2']
    gulp.watch config.js,     ['browserify-watch']
    gulp.watch config.sass,   ['sass-watch']
