const gulp = require('gulp')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/server')


gulp.task('default', gulp.series('deps', 'app', 'server'))