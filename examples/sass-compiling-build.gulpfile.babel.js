// Get gulp components and templates.
import { series, watch } from "gulp";
import { css, sass } from "@coldfrontlabs/gulp-templates";

const paths = {
  css: {
    src: "dist/css",
    dest: "dist/css",
    selector: "**/*.css",
  },
  sass: {
    src: "src/scss",
    dest: "src/scss",
    selector: "**/*.scss",
    // Ignore specifically for Stylelint:fix bug.
    ignore: ["!src/scss/ignored-code/**/*.scss"],
  },
  min: "**/*.min.*",
};

/**
 * Lints all Sass files.
 *
 * @returns {object} - Gulp stream.
 */
export const lintStyles = () =>
  sass.lint({
    source: `${paths.sass.src}/${paths.sass.selector}`,
  });
lintStyles.description = "Lints all Sass files.";

/**
 * Lints and fixes all Sass files.
 *
 * @returns {object} - Gulp stream.
 */
export const lintStylesFix = () =>
  sass.fix({
    source: [`${paths.sass.src}/${paths.sass.selector}`, ...paths.sass.ignore],
  });
lintStylesFix.description = "Lints and fixes all Sass files.";

/**
 * Compiles all Sass files.
 *
 * @returns {object} - Gulp stream.
 */
const compileSass = () =>
  sass.compile({
    source: `${paths.sass.src}/${paths.sass.selector}`,
    destination: paths.css.dest,
  });

/**
 * Compiles all CSS files.
 *
 * @returns {object} - Gulp stream.
 */
const compileCSS = () =>
  css.compile({
    source: [`${paths.css.src}/${paths.css.selector}`, `!${paths.min}`],
    destination: paths.css.dest,
  });

/**
 * Compiles all Sass files and CSS files afterward.
 *
 * @returns {object} - Gulp stream.
 */
export const compileStyles = series(compileSass, compileCSS);
compileStyles.description = "Compiles all Sass files and CSS files afterward.";

/**
 * Minifies all CSS files.
 *
 * @returns {object} - Gulp stream.
 */
export const minifyStyles = () =>
  css.minify({
    source: [`${paths.css.src}/${paths.css.selector}`, `!${paths.min}`],
    destination: paths.css.dest,
  });
minifyStyles.description = "Minifies all CSS files.";

/**
 * Compiles and minifies all Sass/CSS files.
 *
 * @returns {object} - Gulp stream.
 */
export const build = series(compileStyles, minifyStyles);
build.description = "Compiles and minifies all Sass/CSS files.";

/**
 * Watches all Sass files and lints, compiles, and minifies them.
 */
function watchFiles() {
  watch(
    `${paths.sass.src}/${paths.sass.selector}`,
    series(lintStyles, compileStyles, minifyStyles)
  );
}
watchFiles.description =
  "Watches all Sass files and lints, compiles, and minifies them.";
export { watchFiles as watch };

// Create default tasks
export default build;
