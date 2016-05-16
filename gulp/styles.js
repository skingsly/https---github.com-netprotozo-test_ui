'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')();

var sass = require('gulp-sass');

gulp.task('images', function () {
  return gulp.src(paths.src + '/assets/images/**/*')
  .pipe(gulp.dest(paths.tmp + '/serve/app/assets/images/'));
});

gulp.task('styles', ['images'], function () {

  var sassOptions = {
    style: 'expanded'
  };

  return gulp.src([
    paths.src + '/scss/index.scss'
  ])
  .pipe(sass(sassOptions))
  .pipe($.autoprefixer())
  .on('error', function handleError(err) {
    console.error(err.toString());
    this.emit('end');
  })
  .pipe(gulp.dest(paths.tmp + '/serve/app/'));
});
