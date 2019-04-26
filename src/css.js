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
   * Runs postcss/autoprefixer on a provided source and outputs the result.
   *
   * @param   {(String | String[])} source      - The source path(s).
   * @param   {String | Null}       destination - The destination path.
   *
   * @returns {Object} - Gulp stream.
   */
  compile: (source, destination) => {
    const stream = destination ? src(source) : src(source, { base: './' })

    return stream
      .pipe(postcss([autoprefixer()]))
      .pipe(destination ? dest(destination) : dest('.'))
  },
  /**
   * Minifies and renames a provided source and outputs the result.
   *
   * @param   {(String | String[])} source      - The source path(s).
   * @param   {String | Null}       destination - The destination path.
   *
   * @returns {Object} - Gulp stream.
   */
  minify: (source, destination) => {
    const stream = destination ? src(source) : src(source, { base: './' })

    return stream
      .pipe(postcss(
        [
          cssnano(),
          comments()
        ]
      ))
      .pipe(rename({ extname: '.min.css' }))
      .pipe(destination ? dest(destination) : dest('.'))
  }
}

module.exports = css
