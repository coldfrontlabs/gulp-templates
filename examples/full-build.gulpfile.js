// Get gulp components and templates.
const { series, parallel, watch } = require('gulp')
const { css, js, lib, sass } = require('@coldfrontlabs/gulp-templates')

const paths = {
  css: {
    src: 'dist/css',
    dest: 'dist/css',
    selector: '**/*.css'
  },
  js: {
    src: 'src/js',
    dest: 'dist/js',
    selector: '**/*.js'
  },
  lib: {
    src: [
      'node_modules/package1/dist/package1.min.js',
      'node_modules/package2/dist/extras/package2-extra1.min.js',
      'node_modules/package3/dist/package3.min.css'
    ],
    dest: 'dist/lib'
  },
  sass: {
    src: 'src/scss',
    dest: 'src/scss',
    selector: '**/*.scss',
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
const lintStyles = () => sass.lint(`${paths.sass.src}/${paths.sass.selector}`)
lintStyles.description = 'Lints all Sass files.'

/**
 * Lints all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
const lintScripts = () => js.lint(`${paths.js.src}/${paths.js.selector}`)
lintScripts.description = 'Lints all JS files.'

/**
 * Lints and fixes all Sass files.
 *
 * @returns {Object} - Gulp stream.
 */
const lintStylesFix = () => sass.fix([`${paths.sass.src}/${paths.sass.selector}`, ...paths.sass.ignore])
lintStylesFix.description = 'Lints and fixes all Sass files.'

/**
 * Lints and fixes all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
const lintScriptsFix = () => js.fix(`${paths.js.src}/${paths.js.selector}`)
lintScriptsFix.description = 'Lints and fixes all JS files.'

/**
 * Compiles all Sass files.
 *
 * @returns {Object} - Gulp stream.
 */
const compileSass = () => sass.compile(`${paths.sass.src}/${paths.sass.selector}`, paths.css.dest)

/**
 * Compiles all CSS files.
 *
 * @returns {Object} - Gulp stream.
 */
const compileCSS = () => css.compile([`${paths.css.src}/${paths.css.selector}`, `!${paths.min}`], paths.css.dest)

/**
 * Compiles all Sass files and CSS files afterward.
 *
 * @returns {Object} - Gulp stream.
 */
const compileStyles = series(compileSass, compileCSS)
compileStyles.description = 'Compiles all Sass files and CSS files afterward.'

/**
 * Compiles all JS files using Babel.
 *
 * @returns {Object} - Gulp stream.
 */
const compileScripts = () => js.compile(`${paths.js.src}/${paths.js.selector}`, paths.js.dest)
compileScripts.description = 'Compiles all JS files using Babel.'

/**
 * Minifies all CSS files.
 *
 * @returns {Object} - Gulp stream.
 */
const minifyStyles = () => css.minify([`${paths.css.src}/${paths.css.selector}`, `!${paths.min}`], paths.css.dest)
minifyStyles.description = 'Minifies all CSS files.'

/**
 * Minifies all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
const minifyScripts = () => js.minify([`${paths.js.dest}/${paths.js.selector}`, `!${paths.min}`], paths.js.dest)
minifyScripts.description = 'Minifies all JS files.'

/**
 * Gathers all required libraries.
 *
 * @returns {Object} - Gulp stream.
 */
const fetchLibs = () => lib.fetch(paths.lib.src, paths.lib.dest, { base: './node_modules/' })
fetchLibs.description = 'Gathers all required libraries.'

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
  watch(`${paths.sass.src}/${paths.sass.selector}`, series(lintStyles, compileStyles, minifyStyles))
  watch(`${paths.js.src}/${paths.js.selector}`, series(lintScripts, compileScripts, minifyScripts))
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
