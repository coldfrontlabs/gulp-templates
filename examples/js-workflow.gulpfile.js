const { series } = require("gulp");
const { js } = require("@coldfrontlabs/gulp-templates");

const paths = {
  source: "src/js/**/*.js",
  destination: "dist/js",
};

/**
 * Lints all JS files.
 *
 * @returns {object} - Gulp stream.
 */
const lintScripts = () =>
  js.lint({
    source: paths.source,
  });
lintScripts.description = "Lints all JS files.";

/**
 * Lints and fixes all JS files.
 *
 * @returns {object} - Gulp stream.
 */
const fixScripts = () =>
  js.fix({
    source: paths.source,
  });
fixScripts.description = "Lints and fixes all JS files.";

/**
 * Compiles all JS files using Babel.
 *
 * @returns {object} - Gulp stream.
 */
const compileScripts = () =>
  js.compile({
    source: paths.source,
    destination: paths.destination,
  });
compileScripts.description = "Compiles all JS files using Babel.";

/**
 * Minifies all JS files.
 *
 * @returns {object} - Gulp stream.
 */
const minifyScripts = () =>
  js.minify({
    source: [`${paths.destination}/*.js`, `!${paths.destination}/*.min.js`],
    destination: paths.destination,
  });
minifyScripts.description = "Minifies all JS files.";

const build = series(fixScripts, compileScripts, minifyScripts);
build.description = "Lints, fixes, compiles, and minifies all JS files.";

exports.lint = lintScripts;
exports.fix = fixScripts;
exports.compile = compileScripts;
exports.minify = minifyScripts;
exports.build = build;

exports.default = build;
