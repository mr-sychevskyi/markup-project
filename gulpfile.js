"use strict";

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    pump = require('pump');


// sass
gulp.task('sass', function () {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('src/dist'))
});
             
// img
gulp.task('imagemin', function () {
   return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('src/images'))
});

// js
gulp.task('jsmin', function (cb) {
  pump([
        gulp.src('src/js/*.js'),
        uglify(),
        gulp.dest('src/js')
    ],
    cb
  );
});

// watch
gulp.task('watch', function () {
    gulp.watch('src/styles/**/*.scss', ['sass']);
});


// default
gulp.task('default', ['sass', 'watch']);

// production
gulp.task('production', ['sass', 'imagemin', 'jsmin']);