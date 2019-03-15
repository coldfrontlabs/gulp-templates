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
   * Runs sass and on a provided source and outputs the result.
   *
   * @param   {(String | String[])} source      - The source path(s).
   * @param   {String}              destination - The destination path.
   *
   * @returns {Object} - Gulp stream.
   */
  compile: (source, desination) => {
    return src(source)
      .pipe(gulpSass().on('error', gulpSass.logError))
      .pipe(dest(desination));
  }
}

module.exports = sass
