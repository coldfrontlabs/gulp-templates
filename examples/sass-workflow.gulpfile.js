const { series } = require("gulp");
const { css, sass } = require("@coldfrontlabs/gulp-templates");

const paths = {
  sass: {
    source: "src/scss/**/*.{sass,scss}",
  },
  css: {
    source: ["dist/css/*.css", "!dist/css/*.min.css"],
    destination: "dist/css",
  },
};

/**
 * Lints all Sass files.
 *
 * @returns {object} - Gulp stream.
 */
const lintStyles = () =>
  sass.lint({
    source: paths.sass.source,
  });
lintStyles.description = "Lints all Sass files.";

/**
 * Lints and fixes all Sass files.
 *
 * @returns {object} - Gulp stream.
 */
const fixStyles = () =>
  sass.fix({
    source: paths.sass.source,
  });
fixStyles.description = "Lints and fixes all Sass files.";

/**
 * Compiles all Sass files into CSS.
 *
 * @returns {object} - Gulp stream.
 */
const compileStyles = () =>
  sass.compile({
    source: paths.sass.source,
    destination: paths.css.destination,
  });
compileStyles.description = "Compiles all Sass files into CSS.";

/**
 * Minifies all CSS files.
 *
 * @returns {object} - Gulp stream.
 */
const minifyStyles = () =>
  css.minify({
    source: paths.css.source,
  });
minifyStyles.description = "Minifies all CSS files.";

const build = series(fixStyles, compileStyles, minifyStyles);
build.description = "Lints, fixes, compiles, and minifies style files.";

exports.lint = lintStyles;
exports.fix = fixStyles;
exports.compile = compileStyles;
exports.minify = minifyStyles;
exports.build = build;

exports.default = build;
