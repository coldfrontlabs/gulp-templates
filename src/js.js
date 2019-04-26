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
   * @param   {(String | String[])} source - The source path(s).
   *
   * @returns {Object} - Gulp stream.
   */
  lint: (source) => {
    return src(source)
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
  },
  /**
   * Runs eslint:fix on a provided source and outputs the result.
   *
   * @param   {(String | String[])} source      - The source path(s).
   * @param   {String | Null}       destination - The destination path.
   *
   * @returns {Object} - Gulp stream.
   */
  fix: (source, destination) => {
    const stream = destination ? src(source) : src(source, { base: './' })

    return stream
      .pipe(eslint({ fix: true}))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
      .pipe(destination ? dest(destination) : dest('.'))
  },
  /**
   * Runs babel on a provided source and outputs the result.
   *
   * @param   {(String | String[])} source      - The source path(s).
   * @param   {String | Null}       destination - The destination path.
   *
   * @returns {Object} - Gulp stream.
   */
  compile: (source, destination) => {
    const stream = destination ? src(source) : src(source, { base: './' })

    return stream
      .pipe(babel())
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
      .pipe(rename({ extname: '.min.js' }))
      .pipe(uglifyEs())
      .pipe(destination ? dest(destination) : dest('.'))
  }
}

module.exports = js
