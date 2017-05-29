var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    ghPages = require('gh-pages'),
    path = require('path');

var spawn = require('child_process').spawn;

gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: 'resources/public'
        },
        reloadDebounce: 1000
    });
    spawn('lein', ['reload'], { stdio: 'inherit' });
    gulp.watch(['resources/public/**/*.html'], {cwd: '.'}, reload);
});
