# @coldfrontlabs/gulp-templates

[![Latest release](https://img.shields.io/github/v/release/coldfrontlabs/gulp-templates?include_prereleases&style=for-the-badge)](https://github.com/coldfrontlabs/gulp-templates/releases)
[![License](https://img.shields.io/github/license/coldfrontlabs/gulp-templates?style=for-the-badge)](/LICENSE)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=for-the-badge)](https://conventionalcommits.org)

Templates for quick gulp task set-up.

This project assumes users have a basic understanding of how Gulp works. If you require more information on the basics of Gulp, please read the [official documentation](https://gulpjs.com/docs/en/getting-started/quick-start).

## Installation

```shell
# latest stable
npm install -D gulp
npm install -D @coldfrontlabs/gulp-templates
```

## Features

### [CSS](docs/css.md#css-tasks)

* [Lint](docs/css.md#linting)
* [Fix](docs/css.md#fixing-linting-violations)
* [Compile](docs/css.md#compiling)
* [Minify](docs/css.md#minifying)

### [JavaScript](docs/js.md#javascript-tasks)

* [Lint](docs/js.md#linting)
* [Fix](docs/js.md#fixing-linting-violations)
* [Compile](docs/js.md#compiling)
* [Minify](docs/js.md#minifying)

### [Libraries/Dependencies](docs/lib.md#librarydependency-tasks)

* [Fetch](docs/lib.md#fetching)

### [Sass/SCSS](docs/sass.md#sassscss-tasks)

* [Lint](docs/sass.md#linting)
* [Fix](docs/sass.md#fixing-linting-violations)
* [Compile](docs/sass.md#compiling)

## Upgrading from version 1.x?

Check out the [upgrade guide](docs/upgrading.md)!

## Sample gulpfile.js

This file will give you a basic example of how to use the templates.

```js
const { series } = require("gulp");
const { js } = require("@coldfrontlabs/gulp-templates");

/**
 * Compiles all JS files using Babel.
 *
 * @returns {object} - Gulp stream.
 */
const compile = () =>
  js.compile({
    source: "src/js/**/*.js",
    destination: "dist/js",
  });

/**
 * Minifies all JS files.
 *
 * @returns {object} - Gulp stream.
 */
const minify = () =>
  js.minify({
    source: ["dist/js/*.js", `!dist/js/*.min.js`],
    destination: "dist/js",
  });

const build = series(compile, minify);
build.description = "Compiles, and minifies all JS files.";

exports.default = build;
```

### Using the latest JavaScript version

If you want to use the latest greatest JavaScript, follow the [setup instructions for Gulp](https://www.npmjs.com/package/gulp#use-latest-javascript-version-in-your-gulpfile) on the official package.

Here is the example from above written in ES2015.

```js
import { series } from "gulp";
import { js } from "@coldfrontlabs/gulp-templates";

/**
 * Compiles all JS files using Babel.
 *
 * @returns {object} - Gulp stream.
 */
const compile = () =>
  js.compile({
    source: "src/js/**/*.js",
    destination: "dist/js",
  });

/**
 * Minifies all JS files.
 *
 * @returns {object} - Gulp stream.
 */
const minify = () =>
  js.minify({
    source: ["dist/js/*.js", `!dist/js/*.min.js`],
    destination: "dist/js",
  });

const build = series(compile, minify);
build.description = "Compiles, and minifies all JS files.";

export default build;
```

More examples can be found [here](/examples).

## Versioning

This project uses Semantic Versioning 2.0.0 to keep track of releases.

For more detailed information about SemVer, please see the [official documentation](https://semver.org/).

## Contributing

If you're interested in contributing to the project, please read the [Contribution Guidelines](.github/CONTRIBUTING.md). Any and all contributions _must_ follow these guidelines or they will not be accepted.
