gulp       = require 'gulp'
requireDir = require 'require-directory'
requireDir module, './gulp/tasks'

gulp.task 'dev', ->
    process.env.NODE_ENV = 'development'
    gulp.start ['build', 'watch', 'pm2']

gulp.task 'pro', ->
    process.env.NODE_ENV = 'production'
    gulp.start ['build', 'pm2']

gulp.task 'default', ['dev']
