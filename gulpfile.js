var gulp = require('gulp');
var gulpConnect = require('gulp-connect');
var gulpConcat = require('gulp-concat');
var gulpCleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');

var gulpSequence = require('gulp-sequence');
var gulpFileinclude = require('gulp-file-include');


gulp.task('server',function () {
    return gulpConnect.server({
        root:'dist',
        port:'7070',
        livereload:true
    })
});

gulp.task('dist_css',function () {
    return gulp.src('./src/public/css/_*.css')
               .pipe(gulpConcat('all.css'))
               .pipe(gulpCleanCss({
                   advanced:false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
                   keepBreaks:true//类型：Boolean 默认：false [是否保留换行]
               }))
               .pipe(gulp.dest('./dist/public/css'))
               .pipe(gulpConnect.reload())
});

gulp.task('dist_fileinclude_cn',function () {
    return gulp.src('./src/*.html')
               .pipe(gulpFileinclude({
                   prefix:'@@',
                   basepath:'@file'
               }))
               .pipe(gulp.dest('./dist'))
               .pipe(gulpConnect.reload())
});

gulp.task('copy_js',function () {
    return gulp.src('./src/public/js/*.*')
        .pipe(gulp.dest('./dist/public/js'))
        .pipe(gulpConnect.reload())
});

gulp.task('copy_libs',function () {
   return gulp.src('./src/public/libs/**')
       .pipe(gulp.dest('./dist/public/libs'))
});

gulp.task('copy_imgs',function () {
   return gulp.src('./src/public/images/*')
       .pipe(gulp.dest('./dist/public/images'))
});
gulp.task('copy_templates',function () {
   return gulp.src('./src/templates/*.html')
       .pipe(gulp.dest('./dist/templates'))
       .pipe(gulpConnect.reload())
});


gulp.task('watch',function () {

    gulp.watch(['./src/include/*.html','./src/*.html'],['dist_fileinclude_cn']);
    gulp.watch('./src/public/css/*.css',['dist_css']);
    gulp.watch('./src/public/js/*.js',['copy_js']);
    gulp.watch('./src/templates/*.html',['copy_templates']);

});

gulp.task('dist',['dist_fileinclude_cn','dist_css','copy_js','copy_libs','copy_imgs','copy_templates']);
gulp.task('serl',gulpSequence(['watch','server']));

