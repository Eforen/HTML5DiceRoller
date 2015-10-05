var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('testSrv', function(cb) {
  global.watch = true
  gulpSequence('build:development', ['browserSync', 'watch'], cb)
});
