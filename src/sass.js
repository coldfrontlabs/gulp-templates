// Include gulp components.
const { src, dest } = require('gulp')

// Include gulp plugins.
const gulpSass = require('gulp-sass')
const stylelint = require('gulp-stylelint')

// Declare base functions.
const sass = {
  /**
   * Runs stylelint on a provided source.
   *
   * @param   {(String | String[])} source                    - The source path(s).
   * @param   {Object}              [sourceOptions = {}]       - Options for the source.
   *
   * @returns {Object} - Gulp stream.
   */
  lint: (source, sourceOptions = {}) => {
    return src(source, sourceOptions)
      .pipe(stylelint({
        reporters: [{ formatter: 'verbose', console: true }]
      }))
  },
  /**
   * Runs stylelint:fix on a provided source and outputs the result.
   *
   * @param   {(String | String[])} source                    - The source path(s).
   * @param   {String | Null}       destination               - The destination path.
   * @param   {Object}              [sourceOptions = {}]       - Options for the source.
   * @param   {Object}              [destinationOptions = {}] - Options for the destination.
   *
   * @returns {Object} - Gulp stream.
   */
  fix: (source, destination, sourceOptions = {}, destinationOptions = {}) => {
    if (!destination) {
      if (!sourceOptions.base) sourceOptions.base = './'
      destination = '.'
    }

    return src(source, sourceOptions)
      .pipe(stylelint({
        reporters: [{ formatter: 'verbose', console: true }],
        fix: true
      }))
      .pipe(dest(destination, destinationOptions))
  },
  /**
   * Runs sass and on a provided source and outputs the result.
   *
   * @param   {(String | String[])} source                    - The source path(s).
   * @param   {String | Null}       destination               - The destination path.
   * @param   {Object}              [sourceOptions = {}]       - Options for the source.
   * @param   {Object}              [destinationOptions = {}] - Options for the destination.
   *
   * @returns {Object} - Gulp stream.
   */
  compile: (source, destination, sourceOptions = {}, destinationOptions = {}) => {
    if (!destination) {
      if (!sourceOptions.base) sourceOptions.base = './'
      destination = '.'
    }

    return src(source, sourceOptions)
      .pipe(gulpSass().on('error', gulpSass.logError))
      .pipe(dest(destination, destinationOptions))
  }
}

module.exports = sass
