// Include gulp components.
const { src, dest } = require('gulp')

// Include gulp plugins.
const babel = require('gulp-babel')
const eslint = require('gulp-eslint')
const uglifyEs = require('gulp-uglify-es').default
const rename = require('gulp-rename')

// Declare base functions.
const js = {
  /**
   * Runs eslint on a provided source.
   *
   * @param   {(String | String[])} source        - The source path(s).
   * @param   {Boolean}             [fix = false] - Toggle the fix option for eslint.
   *
   * @returns {Object} - Gulp stream.
   */
  lint: (source, fix = false) => {
    const stream = src(source, { base: './' })
      .pipe(eslint({ fix: fix }))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())

    // Only pipe out to destination if fix is enabled.
    if (fix) stream.pipe(dest('.'))

    return stream
  },
  /**
   * Runs babel on a provided source and outputs the result.
   *
   * @param   {(String | String[])} source                                  - The source path(s).
   * @param   {String}              destination                             - The destination path.
   *
   * @returns {Object} - Gulp stream.
   */
  compile: (source, destination) => {
    return src(source)
      .pipe(babel())
      .pipe(dest(destination))
  },
  /**
   * Minifies and renames a provided source and outputs the result.
   *
   * @param   {(String | String[])} source                             - The source path(s).
   * @param   {String}              destination                        - The destination path.
   * @param   {Object}              [options = { extname: '.min.js' }] - The renaming options.
   *
   * @returns {Object} - Gulp stream.
   */
  minify: (source, destination, options = { extname: '.min.js' }) =>{
    return src(source)
      .pipe(rename(options))
      .pipe(uglifyEs())
      .pipe(dest(destination))
  }
}

module.exports = js
