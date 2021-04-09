// Include gulp components.
const { src, dest } = require("gulp");

// Include gulp plugins.
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const comments = require("postcss-discard-comments");
const rename = require("gulp-rename");
const stylelint = require("gulp-stylelint");
const sourcemaps = require("gulp-sourcemaps");

// Declare base functions.
const css = {
  /**
   * Runs stylelint on a provided source.
   *
   * @param   {object}            param0                      - The path options.
   * @param   {(string|string[])} param0.source               - The source path(s).
   * @param   {object}            [param0.sourceOptions = {}] - Options for the source.
   *
   * @returns {object} - Gulp stream.
   */
  lint: ({ source, sourceOptions = {} }) => {
    return src(source, sourceOptions).pipe(
      stylelint({
        reporters: [{ formatter: "verbose", console: true }],
      })
    );
  },
  /**
   * Runs stylelint:fix on a provided source and outputs the result.
   *
   * @param   {object}            param0                           - The path options.
   * @param   {(string|string[])} param0.source                    - The source path(s).
   * @param   {string|null}       [param0.destination = null]      - The destination path.
   * @param   {object}            [param0.sourceOptions = {}]      - Options for the source.
   * @param   {object}            [param0.destinationOptions = {}] - Options for the destination.
   *
   * @returns {object} - Gulp stream.
   */
  fix: ({
    source,
    destination = null,
    sourceOptions = {},
    destinationOptions = {},
  }) => {
    if (destination === null) {
      if (!sourceOptions.base) sourceOptions.base = "./";
      destination = ".";
    }

    return src(source, sourceOptions)
      .pipe(
        stylelint({
          reporters: [{ formatter: "verbose", console: true }],
          fix: true,
        })
      )
      .pipe(dest(destination, destinationOptions));
  },
  /**
   * Runs postcss/autoprefixer on a provided source and outputs the result.
   *
   * @param   {object}            param0                           - The path options.
   * @param   {(string|string[])} param0.source                    - The source path(s).
   * @param   {string|null}       [param0.destination = null]      - The destination path.
   * @param   {object}            [param0.sourceOptions = {}]      - Options for the source.
   * @param   {object}            [param0.destinationOptions = {}] - Options for the destination.
   *
   * @returns {object} - Gulp stream.
   */
  compile: ({
    source,
    destination = null,
    sourceOptions = {},
    destinationOptions = {},
    sourcemap = false,
    sourcemapOptions = {},
  }) => {
    if (destination === null) {
      if (!sourceOptions.base) sourceOptions.base = "./";
      destination = ".";
    }

    let stream = src(source, sourceOptions);

    if (sourcemap) {
      stream = stream
        .pipe(sourcemaps.init(sourcemapOptions))
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write());
    } else {
      stream = stream.pipe(postcss([autoprefixer()]));
    }

    stream = stream.pipe(dest(destination, destinationOptions));

    return stream;
  },
  /**
   * Minifies and renames a provided source and outputs the result.
   *
   * @param   {object}            param0                           - The path options.
   * @param   {(string|string[])} param0.source                    - The source path(s).
   * @param   {string|null}       [param0.destination = null]      - The destination path.
   * @param   {object}            [param0.sourceOptions = {}]      - Options for the source.
   * @param   {object}            [param0.destinationOptions = {}] - Options for the destination.
   *
   * @returns {object} - Gulp stream.
   */
  minify: ({
    source,
    destination = null,
    sourceOptions = {},
    destinationOptions = {},
    sourcemap = false,
    sourcemapOptions = {},
  }) => {
    if (destination === null) {
      if (!sourceOptions.base) sourceOptions.base = "./";
      destination = ".";
    }

    let stream = src(source, sourceOptions);

    if (sourcemap) {
      stream = stream
        .pipe(sourcemaps.init(sourcemapOptions))
        .pipe(
          rename(path => {
            path.extname = ".min.css";
          })
        )
        .pipe(postcss([cssnano(), comments()]))
        .pipe(sourcemaps.write());
    } else {
      stream = stream
        .pipe(
          rename(path => {
            path.extname = ".min.css";
          })
        )
        .pipe(postcss([cssnano(), comments()]));
    }

    stream = stream.pipe(dest(destination, destinationOptions));

    return stream;
  },
};

module.exports = css;
