const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')
const imagemin = require('gulp-imagemin')

gulp.task('appHtml', async () => {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build'))
})

gulp.task('appCss', async () => {
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({'uglyComments': true }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'))
})

gulp.task('appJs', async () => {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({presets: ['env'] }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
})

gulp.task('appImg', async () => {
    return gulp.src('src/assets/img/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/assets/img'))
})

gulp.task('app', gulp.parallel('appHtml', 'appCss', 'appJs', 'appImg'))