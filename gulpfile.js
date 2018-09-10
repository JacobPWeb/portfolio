const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const webserver = require('gulp-webserver');
const inject = require('gulp-inject');

const stylesLocation = 'build/css';
const jsLocation = 'build/js';


gulp.task('html', function () {
  gulp.src([
    'htmlTemplates/head.html',
    'htmlTemplates/header.html',
    'pages/homepage/*.html',
    'htmlTemplates/footer.html'
  ])
    .pipe(concat('home.html'))
    .pipe(gulp.dest('build/html/pages/home'));
  return
});

gulp.task('css', function () {
  return gulp.src('style/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest(stylesLocation))
});

gulp.task('js', function () {
  return gulp.src('client/javascript/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(jsLocation))
});

gulp.task('build', ['html', 'css', 'js']);