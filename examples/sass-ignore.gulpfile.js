const { sass } = require("@coldfrontlabs/gulp-templates");

/**
 * Lints and fixes all Sass files.
 *
 * This also generates a list of ignored files based on .stylelintignore.
 * This is to address the bug found here: https://github.com/olegskl/gulp-stylelint/issues/112
 *
 * @returns {object} - Gulp stream.
 */
const fixStyles = () => {
  let stylelintIgnore = [];

  try {
    const fs = require("fs");
    const data = fs.readFileSync("./.stylelintignore", "utf8");

    stylelintIgnore = data
      .split("\n")
      .filter(
        line => line !== "" && !line.startsWith("#") && !line.startsWith("!")
      )
      .map(line => `!${line}`);
  } catch (error) {
    stylelintIgnore = [];
  }

  return sass.fix({
    source: ["src/scss/**/*.{sass,scss}", ...stylelintIgnore],
  });
};
fixStyles.description = "Lints and fixes all Sass files.";

exports.fixStyles = fixStyles;
