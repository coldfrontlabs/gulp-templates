// Get gulp components and templates.
const { series, parallel, watch } = require('gulp')
const { css, js, lib, sass } = require('@coldfront/gulp-templates')

// Define ignored scss files.
const sassIgnoreList = [
  '!src/scss/ignored-code/**/*.scss'
]

// Define included libraries.
const libPaths = [
  'node_modules/package1/dist/package1.min.js',
  'node_modules/package2/dist/extras/package2-extra1.min.js',
  'node_modules/package3/dist/package3.min.css'
]

/**
 * Lints all Sass files within the src/scss/ directory.
 *
 * @returns {Object} - Gulp stream
 */
const lintStyles = () => sass.lint('src/scss/**/*.scss')
lintStyles.description = 'Lints all Sass files within the src/scss/ directory.'

/**
 * Lints all JS files within the src/js/ directory.
 *
 * @returns {Object} - Gulp stream.
 */
const lintScripts = () => js.lint('src/js/**/*.js')
lintScripts.description = 'Lints all JS files within the src/js/ directory.'

/**
 * Lints and fixes all Sass files within the src/scss/ directory.
 *
 * @returns {Object} - Gulp stream.
 */
const lintStylesFix = () => sass.fix(['src/scss/**/*.scss', ...sassIgnoreList])
lintStylesFix.description = 'Lints and fixes all Sass files within the src/scss/ directory.'

/**
 * Lints and fixes all JS files within the src/js/ directory.
 *
 * @returns {Object} - Gulp stream.
 */
const lintScriptsFix = () => js.fix('src/js/**/*.js')
lintScriptsFix.description = 'Lints and fixes all JS files within the src/js/ directory.'

/**
 * Compiles all Sass files.
 *
 * @returns {Object} - Gulp stream.
 */
const compileSass = () => sass.compile('src/scss/**/*.scss', 'dist/css')

/**
 * Compiles all CSS files.
 *
 * @returns {Object} - Gulp stream.
 */
const compileCSS = () => css.compile(['dist/css/**/*.css', '!dist/css/**/*.min.css'], 'dist/css')

/**
 * Compiles all Sass files and CSS files afterward.
 *
 * @returns {Object} - Gulp stream.
 */
const compileStyles = series(compileSass, compileCSS)
compileStyles.description = 'Compiles all Sass files and CSS files afterward.'

/**
 * Compiles all JS files within the src/js/ directory using Babel and outputs them to the dist/js directory.
 *
 * @returns {Object} - Gulp stream.
 */
const compileScripts = () => js.compile('src/js/**/*.js', 'dist/js')
compileScripts.description = 'Compiles all JS files within the src/js/ directory using Babel and outputs them to the dist/js directory.'

/**
 * Minifies all CSS files within the dist/css directory.
 *
 * @returns {Object} - Gulp stream.
 */
const minifyStyles = () => css.minify(['dist/css/**/*.css', '!dist/css/**/*.min.css'], 'dist/css')
minifyStyles.description = 'Minifies all CSS files within the dist/css directory.'

/**
 * Minifies all JS files within the dist/js directory.
 *
 * @returns {Object} - Gulp stream.
 */
const minifyScripts = () => js.minify(['dist/src/js/**/*.js', '!dist/src/js/**/*.min.js'], 'dist/js')
minifyScripts.description = 'Minifies all JS files within the dist/js directory.'

/**
 * Gathers all required libraries into the dist/lib directory.
 *
 * @returns {Object} - Gulp stream.
 */
const fetchLibs = () => lib.fetch(libPaths, 'dist/lib')
fetchLibs.description = 'Gathers all required libraries into the dist/lib directory.'

/**
 * Lints, compiles, and minifies all Sass/CSS/JS files and gathers all libraries.
 *
 * @returns {Object} - Gulp stream.
 */
const buildDev = parallel(
  series(lintStyles, compileStyles, minifyStyles),
  series(lintScripts, compileScripts, minifyScripts),
  fetchLibs
)
buildDev.description = 'Lints, compiles, and minifies all Sass/CSS/JS files and gathers all libraries.'

/**
 * Compiles and minifies all Sass/CSS/JS files and gathers all libraries.
 *
 * @returns {Object} - Gulp stream.
 */
const buildProd = parallel(
  series(compileStyles, minifyStyles),
  series(compileScripts, minifyScripts),
  fetchLibs
)
buildProd.description = 'Compiles and minifies all Sass/CSS/JS files and gathers all libraries.'

/**
 * Watches all Sass/JS files and lints, compiles, and minifies them.
 */
function watchFiles() {
  watch('src/scss/**/*.scss', series(lintStyles, compileStyles, minifyStyles))
  watch('src/js/**/*.js', series(lintScripts, compileScripts, minifyScripts))
}
watchFiles.description = 'Watches all Sass/JS files and lints, compiles, and minifies them.'

// Export linting tasks.
exports.lintStyles = lintStyles
exports.lintScripts = lintScripts
exports.lintStylesFix = lintStylesFix
exports.lintScriptsFix = lintScriptsFix

// Export compiling tasks.
exports.compileStyles = compileStyles
exports.compileScripts = compileScripts

// Export minifying tasks.
exports.minifyStyles = minifyStyles
exports.minifyScripts = minifyScripts

// Export fetching tasks.
exports.fetchLibs = fetchLibs

// Export build tasks.
exports.buildDev = buildDev
exports.buildProd = buildProd

// Export watch task.
exports.watch = watchFiles

// Export default task.
exports.default = buildProd
