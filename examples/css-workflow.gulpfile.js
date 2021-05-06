const { series } = require("gulp");
const { css } = require("@coldfrontlabs/gulp-templates");

const paths = {
  source: "src/css/**/*.css",
  destination: "dist/css",
};

/**
 * Lints all CSS files.
 *
 * @returns {object} - Gulp stream.
 */
const lintStyles = () =>
  css.lint({
    source: paths.source,
  });
lintStyles.description = "Lints all CSS files.";

/**
 * Lints and fixes all CSS files.
 *
 * @returns {object} - Gulp stream.
 */
const fixStyles = () =>
  css.fix({
    source: paths.source,
  });
fixStyles.description = "Lints and fixes all CSS files.";

/**
 * Compiles all CSS files using Babel.
 *
 * @returns {object} - Gulp stream.
 */
const compileStyles = () =>
  css.compile({
    source: paths.source,
    destination: paths.destination,
  });
compileStyles.description = "Compiles all CSS files using Babel.";

/**
 * Minifies all CSS files.
 *
 * @returns {object} - Gulp stream.
 */
const minifyStyles = () =>
  css.minify({
    source: [`${paths.destination}/*.css`, `!${paths.destination}/*.min.css`],
    destination: paths.destination,
  });
minifyStyles.description = "Minifies all CSS files.";

const build = series(fixStyles, compileStyles, minifyStyles);
build.description = "Lints, fixes, compiles, and minifies all CSS files.";

exports.lint = lintStyles;
exports.fix = fixStyles;
exports.compile = compileStyles;
exports.minify = minifyStyles;
exports.build = build;

exports.default = build;
