var config = require('./')

module.exports = {
  autoprefixer: { browsers: ['last 2 version'] },
  src: config.sourceAssets + "/stylesheets/**/comp_*.{sass,scss}",
  dest: config.publicAssets + '/stylesheets',
  settings: {
    indentedSyntax: true, // Enable .sass syntax!
    imagePath: 'images' // Used by the image-url helper
  }
}
