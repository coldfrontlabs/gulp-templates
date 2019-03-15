// Include gulp components.
const { src, dest } = require('gulp')

// Include gulp plugins.
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const comments = require('postcss-discard-comments')
const rename = require('gulp-rename')
const stylelint = require('gulp-stylelint')

// Declare base functions.
const css = {
  /**
   * Runs stylelint on a provided source.
   *
   * @param   {(String | String[])} source        - The source path(s).
   * @param   {Boolean}             [fix = false] - Toggle the fix option for stylelint.
   *
   * @returns {Object} - Gulp stream.
   */
  lint: (source, fix = false) => {
    const stream = src(source, { base: './' })
      .pipe(stylelint({
        reporters: [{ formatter: 'verbose', console: true }],
        fix: fix
      }))

    // Only pipe out to destination if fix is enabled.
    if (fix) stream.pipe(dest('.'))

    return stream
  },
  /**
   * Runs postcss/autoprefixer on a provided source and outputs the result.
   *
   * @param   {(String | String[])} source      - The source path(s).
   * @param   {String}              destination - The destination path.
   *
   * @returns {Object} - Gulp stream.
   */
  compile: (source, destination) => {
    return src(source)
      .pipe(postcss([autoprefixer()]))
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
  minify: (source, destination, options = { extname: '.min.css' }) => {
    return src(source)
      .pipe(postcss(
        [
          cssnano(),
          comments()
        ]
      ))
      .pipe(rename(options))
      .pipe(dest(destination));
  }
}

module.exports = css
