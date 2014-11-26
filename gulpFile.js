var gulp        = require('gulp');
var browserSync = require('browser-sync');

// Static server
/*gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./public"
        }
    });
});*/

// or...

gulp.task('browser-sync', function() {
    browserSync({
        proxy: "localhost:8080",
        files:"./public/**/*",
        notify: false
    });
    browserSync.reload();
});

gulp.task('default',['browser-sync'],function(){
  browserSync.reload();
});
