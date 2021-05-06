const { parallel, series, watch } = require("gulp");
const { css, js, lib, sass } = require("@coldfrontlabs/gulp-templates");

const paths = {
  css: {
    source: "dist/css",
    destination: "dist/css",
    selector: "**/*.css",
  },
  js: {
    source: "src/js",
    destination: "dist/js",
    selector: "**/*.js",
  },
  lib: {
    source: [
      "node_modules/awesome-package/dist/*",
      "node_modules/another-awesome-package/dist/*",
    ],
    destination: "dist/lib",
  },
  sass: {
    source: "src/scss",
    destination: "src/scss",
    selector: "**/*.{sass,scss}",
  },
  min: "**/*.min.*",
  map: "**/*.map",
};

/**
 * Lints and fixes all JS files.
 *
 * @returns {object} - Gulp stream.
 */
const lintScripts = () => {
  const source = `${paths.js.source}/${paths.js.selector}`;

  return js.fix({
    source,
  });
};
lintScripts.description = "Lints and fixes all JS files.";

/**
 * Lints and fixes all Sass files.
 *
 * @returns {object} - Gulp stream.
 */
const lintStyles = () => {
  const source = `${paths.sass.source}/${paths.sass.selector}`;

  return sass.fix({
    source,
  });
};
lintStyles.description = "Lints and fixes all Sass files.";

/**
 * Compiles all JS files using Babel.
 *
 * @returns {object} - Gulp stream.
 */
const compileScripts = () => {
  const source = `${paths.js.source}/${paths.js.selector}`;
  const { destination } = paths.js;

  return js.compile({
    source,
    destination,
    sourcemap: true,
  });
};
compileScripts.description = "Compiles all JS files using Babel.";

/**
 * Compiles all Sass files into CSS.
 *
 * @returns {object} - Gulp stream.
 */
const compileStyles = () => {
  const source = `${paths.js.source}/${paths.js.selector}`;
  const { destination } = paths.css;

  return sass.compile({
    source,
    destination,
    sourcemap: true,
  });
};
compileStyles.description = "Compiles all Sass files into CSS.";

/**
 * Minifies all compiled JS files.
 *
 * @returns {object} - Gulp stream.
 */
const minifyScripts = () => {
  const { destination } = paths.js;
  const source = [
    `${destination}/${paths.js.selector}`,
    `!${paths.min}`,
    `!${paths.map}`,
  ];

  return js.minify({
    source,
    destination,
    sourcemap: true,
    sourcemapOptions: { loadMaps: true },
  });
};
minifyScripts.description = "Minifies all compiled JS files.";

/**
 * Minifies all CSS files.
 *
 * @returns {object} - Gulp stream.
 */
const minifyStyles = () => {
  const source = [
    `${paths.css.source}/${paths.css.selector}`,
    `!${paths.min}`,
    `!${paths.map}`,
  ];
  const { destination } = paths.css;

  return css.minify({
    source,
    destination,
    sourcemap: true,
    sourcemapOptions: { loadMaps: true },
  });
};
minifyStyles.description = "Minifies all CSS files.";

/**
 * Fetches all required libraries and moves them into the dist directory.
 *
 * @returns {object} - Gulp stream.
 */
const fetchLibs = () => {
  const { source, destination } = paths.lib;

  return lib.fetch({
    source,
    destination,
  });
};
fetchLibs.description =
  "Fetches all required libraries and moves them into the dist directory.";

const build = parallel(
  series(lintScripts, compileScripts, minifyScripts),
  series(lintStyles, compileStyles, minifyStyles),
  fetchLibs
);
build.description =
  "Lints, fixes, compiles, and minifies all source files and fetches libraries.";

const watchFiles = () => {
  watch(
    `${paths.js.source}/${paths.js.selector}`,
    series(lintScripts, compileScripts, minifyScripts)
  );
  watch(
    `${paths.sass.source}/${paths.sass.selector}`,
    series(lintStyles, compileStyles, minifyStyles)
  );
};
watchFiles.description =
  "Watches all source files and lints, fixes, compiles and minifies them accordingly.";

exports.lintScripts = lintScripts;
exports.lintStyles = lintStyles;
exports.compileScripts = compileScripts;
exports.compileStyles = compileStyles;
exports.minifyScripts = minifyScripts;
exports.minifyStyles = minifyStyles;
exports.fetch = fetchLibs;
exports.build = build;
exports.watch = watchFiles;

exports.default = build;
