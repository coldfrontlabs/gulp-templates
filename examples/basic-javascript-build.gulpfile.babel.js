// Get gulp components and templates.
import { series } from 'gulp'
import { js } from '@coldfrontlabs/gulp-templates'

const paths = {
  js: {
    src: 'src/js',
    dest: 'dist/js',
    selector: '**/*.js'
  },
  min: '**/*.min.*'
}

/**
 * Lints all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
export const lintScripts = () => js.lint({
  source: `${paths.js.src}/${paths.js.selector}`
})
lintScripts.description = 'Lints all JS files.'

/**
 * Lints and fixes all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
export const lintScriptsFix = () => js.fix({
  source: `${paths.js.src}/${paths.js.selector}`
})
lintScriptsFix.description = 'Lints and fixes all JS files.'

/**
 * Compiles all JS files using Babel.
 *
 * @returns {Object} - Gulp stream.
 */
export const compileScripts = () => js.compile({
  source: `${paths.js.src}/${paths.js.selector}`,
  destination: paths.js.dest
})
compileScripts.description = 'Compiles all JS files using Babel.'

/**
 * Minifies all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
export const minifyScripts = () => js.minify({
  source: [`${paths.js.dest}/${paths.js.selector}`, `!${paths.min}`],
  destination: paths.js.dest
})
minifyScripts.description = 'Minifies all JS files.'

/**
 * Lints, compiles, and minifies all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
export const buildDev = series(lintScripts, compileScripts, minifyScripts)
buildDev.description = 'Lints, compiles, and minifies all JS files.'

/**
 * Compiles and minifies all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
export const buildProd = series(compileScripts, minifyScripts)
buildProd.description = 'Compiles and minifies all JS files.'

// Create default tasks
export default buildProd
