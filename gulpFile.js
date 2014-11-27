var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./public/scss/app.scss')
  .pipe(sass({
    // includePaths: require('node-bourbon').with('other/path', 'another/path')
    // - or -
    includePaths: require('node-bourbon').includePaths
  }))
  .pipe(gulp.dest('path/to/output.css'));
});

gulp.task('browser-sync', function() {
    browserSync({
        proxy: "localhost:8080",
        files:"./public/**/*",
        notify: false
    });
    browserSync.reload();
});

gulp.task('default',['sass','browser-sync'],function(){
  browserSync.reload();
});
