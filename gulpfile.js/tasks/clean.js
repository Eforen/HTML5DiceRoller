var gulp = require('gulp');
var del = require('del');
var config = require('../config/index');
var htmlConfig = require('../config/html');
//var iconFontConfig = require('../config/iconFont');

gulp.task('clean', function (cb) {
  /*
  del([
    config.publicAssets,
    htmlConfig.dest//,
    //iconFontConfig.sassDest
  ]);
	*/
  del(config.publicAssets);
  del(htmlConfig.dest);
  //del(iconFontConfig.sassDest);
  cb()
});
