const gulp = require('gulp'),
    gutil = require('gulp-util'),
    shell = require('gulp-shell'),
    selenium = require('selenium-standalone'),
    webdriver = require('gulp-webdriver'),
    path = require('path'),
    webpack = require('webpack'),
    webpackStream = require('webpack-stream'),
    del = require('del'),
    webpackConfig = require('./webpack.config'),
    webpackDevServer = require('webpack-dev-server');

gulp.task('clean', function () {
    return del([path.join(__dirname, 'dist/*.js')]);
})

gulp.task('build', function () {
    return gulp.src(path.join(__dirname, 'src/index.js'))
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest('dist/'));
})

gulp.task('start-application', ['clean', 'build'], function () {
    new webpackDevServer(webpack(webpackConfig), {
        contentBase: path.join(__dirname, 'dist'),
        port: 8000,
        compress: true
    }).listen(8000, 'localhost', function (error) {
        if (error) throw new gutil.PluginError(error);
        gutil.log('Application running on localhost 8080');
    })
})

gulp.task('stop-application', shell.task('pkill -f webpack'))

gulp.task('stop-selenium', shell.task('pkill -f selenium-standalone'))

gulp.task('unit', shell.task('npm test'))

gulp.task('start-selenium', function (done) {
    selenium.install (function (error) {
        if (error) return done(error);
        selenium.start(function (error, child) {
            if (error) return done(error);
            selenium.child = child;
            done();
        })
    })
})

gulp.task('functional', ['start-selenium'], function () {
    return gulp.src('wdio.conf.js')
        .pipe(webdriver({
            logLevel: 'silent',
            reporters: ['spec'],
            framework: 'mocha'
        })).once('end', () => {
            selenium.child.kill();
        })
})

gulp.task('run-all-tests', ['unit', 'functional'])
