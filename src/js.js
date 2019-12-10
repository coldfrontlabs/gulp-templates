// Include gulp components.
const { src, dest } = require("gulp");

// Include gulp plugins.
const babel = require("gulp-babel");
const eslint = require("gulp-eslint");
const uglifyEs = require("gulp-uglify-es").default;
const rename = require("gulp-rename");

// Declare base functions.
const js = {
  /**
   * Runs eslint on a provided source.
   *
   * @param   {object}              param0                      - The path options.
   * @param   {(string|string[])} param0.source               - The source path(s).
   * @param   {object}              [param0.sourceOptions = {}] - Options for the source.
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
   * @param   {object}              param0                           - The path options.
   * @param   {(string|string[])} param0.source                    - The source path(s).
   * @param   {string|null}       param0.destination               - The destination path.
   * @param   {object}              [param0.sourceOptions = {}]      - Options for the source.
   * @param   {object}              [param0.destinationOptions = {}] - Options for the destination.
   *
   * @returns {object} - Gulp stream.
   */
  fix: ({
    source,
    destination,
    sourceOptions = {},
    destinationOptions = {}
  }) => {
    if (!destination) {
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
   * @param   {object}              param0                           - The path options.
   * @param   {(string|string[])} param0.source                    - The source path(s).
   * @param   {string|null}       param0.destination               - The destination path.
   * @param   {object}              [param0.sourceOptions = {}]      - Options for the source.
   * @param   {object}              [param0.destinationOptions = {}] - Options for the destination.
   *
   * @returns {object} - Gulp stream.
   */
  compile: ({
    source,
    destination,
    sourceOptions = {},
    destinationOptions = {}
  }) => {
    if (!destination) {
      if (!sourceOptions.base) sourceOptions.base = "./";
      destination = ".";
    }

    return src(source, sourceOptions)
      .pipe(babel())
      .pipe(dest(destination, destinationOptions));
  },
  /**
   * Minifies and renames a provided source and outputs the result.
   *
   * @param   {object}              param0                           - The path options.
   * @param   {(string|string[])} param0.source                    - The source path(s).
   * @param   {string|null}       param0.destination               - The destination path.
   * @param   {object}              [param0.sourceOptions = {}]      - Options for the source.
   * @param   {object}              [param0.destinationOptions = {}] - Options for the destination.
   *
   * @returns {object} - Gulp stream.
   */
  minify: ({
    source,
    destination,
    sourceOptions = {},
    destinationOptions = {}
  }) => {
    if (!destination) {
      if (!sourceOptions.base) sourceOptions.base = "./";
      destination = ".";
    }

    return src(source, sourceOptions)
      .pipe(rename({ extname: ".min.js" }))
      .pipe(uglifyEs())
      .pipe(dest(destination, destinationOptions));
  }
};

module.exports = js;
