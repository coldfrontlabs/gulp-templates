const { src, dest } = require("gulp");

const lib = {
  /**
   * Gathers source files and outputs them to a provided destination.
   *
   * @param   {object}          param0                           - The path options.
   * @param   {string|string[]} param0.source                    - The source path(s).
   * @param   {string}          param0.destination               - The destination path.
   * @param   {object}          [param0.sourceOptions = {}]      - Options for the source.
   * @param   {object}          [param0.destinationOptions = {}] - Options for the destination.
   * @returns {object} - Gulp stream.
   */
  fetch: ({
    source,
    destination,
    sourceOptions = {},
    destinationOptions = {},
  }) => {
    return src(source, sourceOptions).pipe(
      dest(destination, destinationOptions)
    );
  },
};

module.exports = lib;
