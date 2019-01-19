const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');

const webpackConfig = require('./webpack.config');

const config = require('./config/config');

gulp.task('build', () =>
  webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest('build'))
)

gulp.task('staticresource', gulp.series('build', (done) => {
  gulp.src(['build/**/*.js', 'build/**/*.js.map'])
    .pipe(gulp.dest('./force-app/main/default/staticresources/' + config.staticResourceName))
    .on('end', done);
}));
