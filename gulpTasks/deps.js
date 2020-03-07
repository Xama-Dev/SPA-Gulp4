const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('depsCss', async () => {
    return gulp.src(['node_modules/font-awesome/css/font-awesome.css'])
        .pipe(uglifycss({ "uglyComments": false }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
})

gulp.task('depsFonts', async () => {
    return gulp.src(['node_modules/font-awesome/fonts/*.*'])
        .pipe(gulp.dest('build/assets/fonts'))
})

gulp.task('deps', gulp.parallel('depsCss', 'depsFonts'))

