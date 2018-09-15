const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const webserver = require('gulp-webserver');
const inject = require('gulp-inject');
const livereload = require('gulp-livereload');

const stylesLocation = 'build/css';
const jsLocation = 'build/js';

const devCssLocation = 'style/*.scss';
const devJsLocation = 'js/*.js';

const pagesInformation = [
  { name: 'home', directory: 'homepage' },
  { name: 'projects', directory: 'projects' }
]


gulp.task('html', function () {
  pagesInformation.forEach((pageInfo) => {
    gulp.src([
      'htmlTemplates/head.html',
      'htmlTemplates/header.html',
      `pages/${pageInfo.directory}/${pageInfo.name}.html`,
      'htmlTemplates/footer.html'
    ])
      .pipe(concat(`${pageInfo.name}.html`))
      .pipe(gulp.dest(`build/html/pages/${pageInfo.directory}`));
  })

  return
});

gulp.task('css', function () {
  return gulp.src(devCssLocation)
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest(stylesLocation))
    .pipe(livereload())
});

gulp.task('js', function () {
  return gulp.src('js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(jsLocation))
    .pipe(livereload())
});

gulp.task('inject', function () {
  const css = gulp.src(stylesLocation);
  const js = gulp.src(jsLocation);
  return gulp.src()
});

gulp.task('watchfiles', function () {
  livereload.listen();
  gulp.watch(devCssLocation, ['build']);
  gulp.watch(devJsLocation, ['build']);
})


gulp.task('build', ['html', 'css', 'js']);
gulp.task('watch', ['build', 'watchfiles'])