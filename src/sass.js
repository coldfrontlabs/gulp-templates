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
   * @param   {(String | String[])} source - The source path(s).
   *
   * @returns {Object} - Gulp stream.
   */
  lint: (source) => {
    return src(source)
      .pipe(stylelint({
        reporters: [{ formatter: 'verbose', console: true }]
      }))
  },
  /**
   * Runs stylelint:fix on a provided source and outputs the result.
   *
   * @param   {(String | String[])} source      - The source path(s).
   * @param   {String | Null}       destination - The destination path.
   *
   * @returns {Object} - Gulp stream.
   */
  fix: (source, destination) => {
    const stream = destination ? src(source) : src(source, { base: './' })

    return stream
      .pipe(stylelint({
        reporters: [{ formatter: 'verbose', console: true }],
        fix: true
      }))
      .pipe(destination ? dest(destination) : dest('.'))
  },
  /**
   * Runs sass and on a provided source and outputs the result.
   *
   * @param   {(String | String[])} source      - The source path(s).
   * @param   {String | Null}       destination - The destination path.
   *
   * @returns {Object} - Gulp stream.
   */
  compile: (source, destination) => {
    const stream = destination ? src(source) : src(source, { base: './' })

    return stream
      .pipe(gulpSass().on('error', gulpSass.logError))
      .pipe(destination ? dest(destination) : dest('.'))
  }
}

module.exports = sass
