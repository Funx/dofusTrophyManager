var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./public/scss/app.scss')
  .pipe(sass({includePaths: require('node-bourbon').includePaths}))
  .pipe(gulp.dest('./public/css/'))
  .pipe(reload({stream:true}));
});

gulp.task('browser-sync', function() {
    browserSync({
        proxy: "localhost:8080",
        files:["./public/**/*.html",
        "./public/css/*.css",
        "./public/scripts/**/*.js",
        "./public/images/**/*"],
        notify: false
    });
    browserSync.reload();
});

gulp.task('default',['sass','browser-sync'],function(){
  gulp.watch("./public/scss/**/*.scss", ["sass",browserSync.reload]);
  browserSync.reload();
});
