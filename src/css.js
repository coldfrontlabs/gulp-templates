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
   * @param   {Object}              param0                      - The path options.
   * @param   {(String | String[])} param0.source               - The source path(s).
   * @param   {Object}              [param0.sourceOptions = {}] - Options for the source.
   *
   * @returns {Object} - Gulp stream.
   */
  lint: ({ source, sourceOptions = {} }) => {
    return src(source, sourceOptions)
      .pipe(stylelint({
        reporters: [{ formatter: 'verbose', console: true }]
      }))
  },
  /**
   * Runs stylelint:fix on a provided source and outputs the result.
   *
   * @param   {Object}              param0                           - The path options.
   * @param   {(String | String[])} param0.source                    - The source path(s).
   * @param   {String | Null}       param0.destination               - The destination path.
   * @param   {Object}              [param0.sourceOptions = {}]      - Options for the source.
   * @param   {Object}              [param0.destinationOptions = {}] - Options for the destination.
   *
   * @returns {Object} - Gulp stream.
   */
  fix: ({ source, destination, sourceOptions = {}, destinationOptions = {} }) => {
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
   * Runs postcss/autoprefixer on a provided source and outputs the result.
   *
   * @param   {Object}              param0                           - The path options.
   * @param   {(String | String[])} param0.source                    - The source path(s).
   * @param   {String | Null}       param0.destination               - The destination path.
   * @param   {Object}              [param0.sourceOptions = {}]      - Options for the source.
   * @param   {Object}              [param0.destinationOptions = {}] - Options for the destination.
   *
   * @returns {Object} - Gulp stream.
   */
  compile: ({ source, destination, sourceOptions = {}, destinationOptions = {} }) => {
    if (!destination) {
      if (!sourceOptions.base) sourceOptions.base = './'
      destination = '.'
    }

    return src(source, sourceOptions)
      .pipe(postcss([autoprefixer()]))
      .pipe(dest(destination, destinationOptions))
  },
  /**
   * Minifies and renames a provided source and outputs the result.
   *
   * @param   {Object}              param0                           - The path options.
   * @param   {(String | String[])} param0.source                    - The source path(s).
   * @param   {String | Null}       param0.destination               - The destination path.
   * @param   {Object}              [param0.sourceOptions = {}]      - Options for the source.
   * @param   {Object}              [param0.destinationOptions = {}] - Options for the destination.
   *
   * @returns {Object} - Gulp stream.
   */
  minify: ({ source, destination, sourceOptions = {}, destinationOptions = {} }) => {
    if (!destination) {
      if (!sourceOptions.base) sourceOptions.base = './'
      destination = '.'
    }

    return src(source, sourceOptions)
      .pipe(postcss(
        [
          cssnano(),
          comments()
        ]
      ))
      .pipe(rename({ extname: '.min.css' }))
      .pipe(dest(destination, destinationOptions))
  }
}

module.exports = css
