const { src, dest } = require('gulp')

const lib = {
  /**
   * Gathers source files and outputs them to a provided destination.
   *
   * @param   {Object}              param0                           - The path options.
   * @param   {(String | String[])} param0.source                    - The source path(s).
   * @param   {String | Null}       param0.destination               - The destination path.
   * @param   {Object}              [param0.sourceOptions = {}]      - Options for the source.
   * @param   {Object}              [param0.destinationOptions = {}] - Options for the destination.
   *
   * @returns {Object} - Gulp stream.
   */
  fetch: ({ source, destination, sourceOptions = {}, destinationOptions = {} }) => {
    return src(source, sourceOptions)
      .pipe(dest(destination, destinationOptions))
  }
}

module.exports = lib
