const { src, dest } = require('gulp')

const lib = {
  /**
   * Gathers source files and outputs them to a provided destination.
   *
   * @param   {(String | String[])} source                    - The source path(s).
   * @param   {String}              destination               - The destination path.
   * @param   {Object}              [sourcOptions = {}]       - Options for the source.
   * @param   {Object}              [destinationOptions = {}] - Options for the destination.
   *
   * @returns {Object} - Gulp stream.
   */
  fetch: (source, destination, sourceOptions = {}, destinationOptions = {}) => {
    return src(source, sourceOptions)
      .pipe(dest(destination, destinationOptions))
  }
}

module.exports = lib
