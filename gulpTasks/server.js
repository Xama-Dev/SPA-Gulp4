const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')
require('./app')

gulp.task('monitorChanges', async () => {
    watch('src/**/*.html', gulp.series('appHtml'))
    watch('src/**/*.scss', gulp.series('appCss'))
    watch('src/**/*.js', gulp.series('appJs'))
    watch('src/assets/img/**/*.*', gulp.series('appImg'))
})

gulp.task('runServer', async () => {
    return gulp.src('build').pipe(webserver({
            livereload: true,
            port: 8080,
            open: true
        }))
})

gulp.task('server', gulp.series('monitorChanges', 'runServer'))