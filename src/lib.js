const { src, dest } = require('gulp')

const lib = {
  /**
   * Gathers source files and outputs them to a provided destination.
   *
   * @param   {(String | String[])} source      - The source path(s).
   * @param   {String}              destination - The destination path.
   *
   * @returns {Object} - Gulp stream.
   */
  fetch: (source, destination) => {
    return src(source)
      .pipe(dest(destination))
  }
}
