// Get gulp components and templates.
const { series } = require("gulp");
const { js } = require("@coldfrontlabs/gulp-templates");

const paths = {
  js: {
    src: "src/js",
    dest: "dist/js",
    selector: "**/*.js"
  },
  min: "**/*.min.*"
};

/**
 * Lints all JS files.
 *
 * @returns {object} - Gulp stream.
 */
const lintScripts = () =>
  js.lint({
    source: `${paths.js.src}/${paths.js.selector}`
  });
lintScripts.description = "Lints all JS files.";

/**
 * Lints and fixes all JS files.
 *
 * @returns {object} - Gulp stream.
 */
const lintScriptsFix = () =>
  js.fix({
    source: `${paths.js.src}/${paths.js.selector}`
  });
lintScriptsFix.description = "Lints and fixes all JS files.";

/**
 * Compiles all JS files using Babel.
 *
 * @returns {object} - Gulp stream.
 */
const compileScripts = () =>
  js.compile({
    source: `${paths.js.src}/${paths.js.selector}`,
    destination: paths.js.dest
  });
compileScripts.description = "Compiles all JS files using Babel.";

/**
 * Minifies all JS files.
 *
 * @returns {object} - Gulp stream.
 */
const minifyScripts = () =>
  js.minify({
    source: [`${paths.js.dest}/${paths.js.selector}`, `!${paths.min}`],
    destination: paths.js.dest
  });
minifyScripts.description = "Minifies all JS files.";

/**
 * Lints, compiles, and minifies all JS files.
 *
 * @returns {object} - Gulp stream.
 */
const buildDev = series(lintScripts, compileScripts, minifyScripts);
buildDev.description = "Lints, compiles, and minifies all JS files.";

/**
 * Compiles and minifies all JS files.
 *
 * @returns {object} - Gulp stream.
 */
const buildProd = series(compileScripts, minifyScripts);
buildProd.description = "Compiles and minifies all JS files.";

// Export linting tasks.
exports.lintScripts = lintScripts;
exports.lintScriptsFix = lintScriptsFix;

// Export compiling task.
exports.compileScripts = compileScripts;

// Export minifying task.
exports.minifyScripts = minifyScripts;

// Export build tasks.
exports.buildDev = buildDev;
exports.buildProd = buildProd;

// Export default task.
exports.default = buildProd;
