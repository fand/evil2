gulp  = require 'gulp'
config = require('../config').pm2

pm2 = require 'pm2'

gulp.task 'pm2', ->
    pm2.connect (err) ->
        throw err if err?
        pm2.gracefulReload config.app, (err, proc) ->
            throw err if err?
