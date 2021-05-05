// Include gulp components.
const { src, dest } = require("gulp");

// Include gulp plugins.
const babel = require("gulp-babel");
const eslint = require("gulp-eslint");
const terser = require("gulp-terser");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");

// Declare base functions.
const js = {
  /**
   * Runs eslint on a provided source.
   *
   * @param   {object}            param0                      - The path options.
   * @param   {string|string[]}   param0.source               - The source path(s).
   * @param   {object}            [param0.sourceOptions = {}] - Options for the source.
   *
   * @returns {object} - Gulp stream.
   */
  lint: ({ source, sourceOptions = {} }) => {
    return src(source, sourceOptions)
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  },
  /**
   * Runs eslint:fix on a provided source and outputs the result.
   *
   * @param   {object}            param0                           - The path options.
   * @param   {string|string[]}   param0.source                    - The source path(s).
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
      .pipe(eslint({ fix: true }))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
      .pipe(dest(destination, destinationOptions));
  },
  /**
   * Runs babel on a provided source and outputs the result.
   *
   * @param   {object}            param0                           - The path options.
   * @param   {string|string[]}   param0.source                    - The source path(s).
   * @param   {string|null}       [param0.destination = null]      - The destination path.
   * @param   {object}            [param0.sourceOptions = {}]      - Options for the source.
   * @param   {object}            [param0.destinationOptions = {}] - Options for the destination.
   * @param   {boolean}           [param0.sourcemap = false]       - A toggle to generate sourcemaps.
   * @param   {object}            [param0.sourcemapOptions = {}]   - Options for generating sourcemaps.
   *
   * @returns {object} - Gulp stream.
   */
  compile: ({
    source,
    destination = null,
    sourceOptions = {},
    destinationOptions = {},
    sourcemap = true,
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
        .pipe(babel())
        .pipe(sourcemaps.write());
    } else {
      stream = stream.pipe(babel());
    }

    stream = stream.pipe(dest(destination, destinationOptions));

    return stream;
  },
  /**
   * Minifies and renames a provided source and outputs the result.
   *
   * @param   {object}            param0                           - The path options.
   * @param   {string|string[]}   param0.source                    - The source path(s).
   * @param   {string|null}       [param0.destination = null]      - The destination path.
   * @param   {object}            [param0.sourceOptions = {}]      - Options for the source.
   * @param   {object}            [param0.destinationOptions = {}] - Options for the destination.
   * @param   {boolean}           [param0.sourcemap = false]       - A toggle to generate sourcemaps.
   * @param   {object}            [param0.sourcemapOptions = {}]   - Options for generating sourcemaps.
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
          rename((path) => {
            path.extname = ".min.js";
          })
        )
        .pipe(terser())
        .pipe(sourcemaps.write());
    } else {
      stream = stream
        .pipe(
          rename((path) => {
            path.extname = ".min.js";
          })
        )
        .pipe(terser());
    }

    stream = stream.pipe(dest(destination, destinationOptions));

    return stream;
  },
};

module.exports = js;
