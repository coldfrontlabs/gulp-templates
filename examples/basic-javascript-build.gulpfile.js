// Get gulp components and templates.
const { series } = require('gulp')
const { js } = require('@coldfront/gulp-templates')

const paths = {
  js: {
    src: 'src/js/**/*.js',
    dest: 'dest/js'
  },
  min: '**/*.min.*'
}

/**
 * Lints all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
const lintScripts = () => js.lint(paths.sass.src)
lintScripts.description = 'Lints all JS files.'

/**
 * Lints and fixes all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
const lintScriptsFix = () => js.fix(paths.js.src)
lintScriptsFix.description = 'Lints and fixes all JS files.'

/**
 * Compiles all JS files using Babel.
 *
 * @returns {Object} - Gulp stream.
 */
const compileScripts = () => js.compile(paths.js.src, paths.js.dest)
compileScripts.description = 'Compiles all JS files using Babel.'

/**
 * Minifies all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
const minifyScripts = () => js.minify([paths.js.src, `!${paths.min}`], paths.js.dest)
minifyScripts.description = 'Minifies all JS files.'

/**
 * Lints, compiles, and minifies all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
const buildDev = series(lintScripts, compileScripts, minifyScripts)
buildDev.description = 'Lints, compiles, and minifies all JS files.'

/**
 * Compiles and minifies all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
const buildProd = series(compileScripts, minifyScripts)
buildProd.description = 'Compiles and minifies all JS files.'

// Export linting tasks.
exports.lintScripts = lintScripts
exports.lintScriptsFix = lintScriptsFix

// Export compiling task.
exports.compileScripts = compileScripts

// Export minifying task.
exports.minifyScripts = minifyScripts

// Export build tasks.
exports.buildDev = buildDev
exports.buildProd = buildProd

// Export default task.
exports.default = buildProd