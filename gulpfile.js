'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
let cleanCSS = require('gulp-clean-css');

gulp.task('css', () => {
  return gulp.src('src/styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass', function () {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', () =>
    gulp.src('src/js/index.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('./dist/js'))
);

gulp.task('default',['js', 'css', 'sass']);

gulp.task('dev', function () {
	gulp.watch('./src/styles/*.scss', ['sass']);
	gulp.watch('./src/js/*.js', ['js']);
	gulp.watch('./src/styles/*.css', ['css'])
});
