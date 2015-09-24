var gulp = require('gulp');
var karma = require('karma');
var Server =  require('karma').Server;

var karmaTask = function(done) {
  var server = new Server({
    configFile: process.cwd() + '/karma.conf.js',
    singleRun: true
  }, function(exitStatus) {
    // Karma's return status is not compatible with gulp's streams
    // See: http://stackoverflow.com/questions/26614738/issue-running-karma-task-from-gulp
    // or: https://github.com/gulpjs/gulp/issues/587 for more information
    done(exitStatus ? "There are failing unit tests" : undefined);
  });
  server.start()
};

gulp.task('karma', karmaTask);

module.exports = karmaTask;
