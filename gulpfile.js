const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const entryPath = '01_Task_1';

gulp.task('compileSass', function () {
  return gulp.src(entryPath + '/scss/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(entryPath + '/css'));
});

gulp.task('default', gulp.series('compileSass'));