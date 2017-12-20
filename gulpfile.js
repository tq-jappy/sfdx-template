const gulp = require('gulp');
const zip = require('gulp-zip');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');

const webpackConfig = require('./webpack.config');

gulp.task('build', () =>
  webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest('build/assets'))
)

gulp.task('staticresource', [ 'build' ], () => {
  gulp.src('./build/assets/**', { base:  'build/assets' })
    .pipe(zip('pkg.resource'))
    .pipe(gulp.dest('./force-app/main/default/staticresources'))
});

/*
gulp.task('watch', () => {
  gulp.watch( ['src/*.js'] , ['build'] );
})
*/