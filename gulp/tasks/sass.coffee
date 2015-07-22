gulp   = require 'gulp'
$      = require('gulp-load-plugins')()
reload = require('browser-sync').reload
config = require('../config').sass
notify = require '../utils/notify'

is_watching = false

gulp.task 'sass', ->
  return gulp.src(config.src)
    .pipe $.sass()
    .pipe $.plumber()
    .pipe $.autoprefixer('last 1 version')
    .pipe gulp.dest(config.dst)
    .pipe $.size()
    .pipe $.if is_watching, reload stream: true


gulp.task 'sass-watch', ->
    is_watching = true
    gulp.start 'sass'
