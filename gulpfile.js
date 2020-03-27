var gulp = require("gulp");
var browserSync = require("browser-sync");
var sass = require("gulp-sass");

// Static Server + watch scss/html files
gulp.task('serve', ['sass'], function(){

    browserSync.init({
        server: "./src"
    });

    gulp.watch(['node_modules/bootstrap/css/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['js', 'serve']);
