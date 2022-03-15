const { src, dest } = require("gulp");

// Include gulp plugins.
const rename = require("gulp-rename");

const lib = {
  /**
   * Gathers source files and outputs them to a provided destination.
   *
   * **Note:** if neither renameOptions or renameFunction are changed from their
   * default values a default function will run changing all "@" symbols in the
   * directory path to "_"s. This is to resolve an issue with some server not
   * being able to properly parse the encoded "@" symbol.
   *
   * @param   {object}          param0                           - The path options.
   * @param   {string|string[]} param0.source                    - The source path(s).
   * @param   {string}          param0.destination               - The destination path.
   * @param   {object}          [param0.sourceOptions = {}]      - Options for the source.
   * @param   {object}          [param0.destinationOptions = {}] - Options for the destination.
   * @param   {object}          [param0.renameOptions = {}]      - Options for renaming.
   * @param   {!Function}       [param0.renameFunction = null]   - A function to pass to ranme.
   * @returns {object} - Gulp stream.
   */
  fetch: ({
    source,
    destination,
    sourceOptions = {},
    destinationOptions = {},
    renameOptions = {},
    renameFunction = null,
  }) => {
    let stream = src(source, sourceOptions);

    if (renameFunction) {
      /* eslint-disable-next-line no-undef */
      stream = stream.pipe(rename(path => renameFunction(path)));
    } else if (Object.keys(renameOptions).length === 0) {
      /* eslint-disable-next-line no-undef */
      stream = stream.pipe(
        rename(path => {
          path.dirname = path.dirname.replace("@", "_");
        })
      );
    } else {
      stream = stream.pipe(rename(renameOptions));
    }

    stream.pipe(dest(destination, destinationOptions));

    return stream;
  },
};

module.exports = lib;
