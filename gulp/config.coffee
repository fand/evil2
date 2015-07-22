gulp = require 'gulp'

path = require 'path'
BASE_DIR = __dirname + '/../'
BASE = (p) -> path.join(BASE_DIR, p)

module.exports =
    browserify: [{
        src: [BASE 'src/js/main.js'],
        dst: BASE('public/js'),
        name: 'evil.js'
    }],
    sass:
        src: BASE 'src/scss/**/*.scss'
        dst: BASE 'public/css'
    watch:
        server : BASE('server/**/*')
        js     : BASE('src/js/**/*')
        sass   : BASE('src/scss/**/*')
    pm2:
        app : BASE 'server/app.js'
