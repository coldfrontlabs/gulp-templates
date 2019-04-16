// Get gulp components and templates.
const { series, watch } = require('gulp')
const { css, sass } = require('@coldfront/gulp-templates')

const paths = {
  css: {
    src: 'dist/css/**/*.css',
    dest: 'dist/css'
  },
  sass: {
    src: 'src/scss/**/*.scss',
    // Ignore specifically for Stylelint:fix bug.
    ignore: [
      '!src/scss/ignored-code/**/*.scss'
    ]
  },
  min: '**/*.min.*'
}

/**
 * Lints all Sass files.
 *
 * @returns {Object} - Gulp stream.
 */
const lintStyles = () => sass.lint(paths.sass.src)
lintStyles.description = 'Lints all Sass files.'

/**
 * Lints and fixes all Sass files.
 *
 * @returns {Object} - Gulp stream.
 */
const lintStylesFix = () => sass.fix([paths.sass.src, ...paths.sass.ignore])
lintStylesFix.description = 'Lints and fixes all Sass files.'

/**
 * Compiles all Sass files.
 *
 * @returns {Object} - Gulp stream.
 */
const compileSass = () => sass.compile(paths.sass.src, paths.css.dest)

/**
 * Compiles all CSS files.
 *
 * @returns {Object} - Gulp stream.
 */
const compileCSS = () => css.compile([paths.css.src, `!${paths.min}`], paths.css.dest)

/**
 * Compiles all Sass files and CSS files afterward.
 *
 * @returns {Object} - Gulp stream.
 */
const compileStyles = series(compileSass, compileCSS)
compileStyles.description = 'Compiles all Sass files and CSS files afterward.'

/**
 * Minifies all CSS files.
 *
 * @returns {Object} - Gulp stream.
 */
const minifyStyles = () => css.minify([paths.css.src, `!${paths.min}`], paths.css.dest)
minifyStyles.description = 'Minifies all CSS files.'

/**
 * Compiles and minifies all Sass/CSS files.
 *
 * @returns {Object} - Gulp stream.
 */
const build = series(compileStyles, minifyStyles)
build.description = 'Compiles and minifies all Sass/CSS files.'

/**
 * Watches all Sass files and lints, compiles, and minifies them.
 */
function watchFiles() {
  watch(paths.sass.src, series(lintStyles, compileStyles, minifyStyles))
}
watchFiles.description = 'Watches all Sass files and lints, compiles, and minifies them.'

// Export linting tasks.
exports.lintStyles = lintStyles
exports.lintStylesFix = lintStylesFix

// Export compiling task.
exports.compileStyles = compileStyles

// Export minifying task.
exports.minifyStyles = minifyStyles

// Export build task.
exports.build = build

// Export watch task.
exports.watch = watchFiles

// Export default task.
exports.default = build
