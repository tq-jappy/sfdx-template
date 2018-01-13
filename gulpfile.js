const gulp = require('gulp');
const zip = require('gulp-zip');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');

const webpackConfig = require('./webpack.config');

const config = require('./config/config');

gulp.task('build', () =>
  webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest('build'))
)

gulp.task('staticresource', ['build'], () => {
  gulp.src(['build/**/*.js', 'build/**/*.js.map'])
    .pipe(gulp.dest('./force-app/main/default/staticresources/' + config.staticResourceName))
});