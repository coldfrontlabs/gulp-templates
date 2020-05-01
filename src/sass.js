// Include gulp components.
const { src, dest } = require("gulp");

// Include gulp plugins.
const gulpSass = require("gulp-sass");
const stylelint = require("gulp-stylelint");

// Declare base functions.
const sass = {
  /**
   * Runs stylelint on a provided source.
   *
   * @param   {object}              param0                      - The path options.
   * @param   {(string|string[])} param0.source               - The source path(s).
   * @param   {object}              [param0.sourceOptions = {}] - Options for the source.
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
    destinationOptions = {},
  }) => {
    if (!destination) {
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
   * Runs sass and on a provided source and outputs the result.
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
    destinationOptions = {},
  }) => {
    if (!destination) {
      if (!sourceOptions.base) sourceOptions.base = "./";
      destination = ".";
    }

    return src(source, sourceOptions)
      .pipe(gulpSass().on("error", gulpSass.logError))
      .pipe(dest(destination, destinationOptions));
  },
};

module.exports = sass;
