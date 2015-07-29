gulp  = require 'gulp'
config = require('../config').pm2

pm2 = require 'pm2'

isRunning = false

gulp.task 'pm2', ->
    pm2.connect (err) ->
        throw err if err?

        if isRunning
            pm2.gracefulReload config.app, (err, proc) ->
                throw err if err?
        else
            pm2.start config.app, (err, proc) ->
                isRunning = true
