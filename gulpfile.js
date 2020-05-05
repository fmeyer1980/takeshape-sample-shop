const gulp = require('gulp');
const sass = require("gulp-sass");


gulp.task('css', function() {
  return gulp.src('./src/assets/scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('./src/templates/data/tmp/css'));
});

gulp.task("watch", function() {
  gulp.watch('./src/assets/scss/**/*.scss', gulp.parallel('css'));
});

gulp.task('dev', gulp.series(
  'css',
  'watch'
));


