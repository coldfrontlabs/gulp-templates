# @coldfrontlabs/gulp-templates

[![NPM Version](https://img.shields.io/npm/v/@coldfrontlabs/gulp-templates.svg?style=for-the-badge)](https://www.npmjs.org/package/@coldfrontlabs/gulp-templates)
[![License](https://img.shields.io/github/license/coldfrontlabs/gulp-templates.svg?style=for-the-badge)](/LICENSE)

Templates for quick gulp task set-up.

This project assumes users have a basic understand of how Gulp works. If you require more information on the basics of Gulp, please read the [official documentation](https://gulpjs.com/docs/en/getting-started/quick-start).

## Installation

```cmd
npm install gulp --save-dev
npm install @coldfrontlabs/gulp-templates --save-dev
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

## Sample gulpfile.js

This file will give you a basic example of how to use the templates.

```jsx
const { series, watch } = require('gulp')
const { js } = require('@coldfrontlabs/gulp-templates')

const paths = {
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js'
  },
  min: '**/*.min.*'
}

/**
 * Lints all JS files in the src/js/ directory.
 *
 * @returns {Object} - Gulp stream.
 */
const lintScripts = () => js.lint(paths.scripts.src)
lintScripts.description = 'Lints all JS files in the src/js/ directory.'

/**
 * Lints and fixes all JS files in the src/js/ directory.
 *
 * @returns {Object} - Gulp stream.
 */
const lintScriptsFix = () => js.fix(paths.scripts.src)
lintScriptsFix.description = 'Lints and fixes all JS files in the src/js/ directory.'

/**
 * Compiles all JS files in the src/js/ directory and outputs them to dest/js/.
 *
 * @returns {Object} - Gulp stream.
 */
const compileScripts = () => js.compile(paths.scripts.src, paths.scripts.dest)
compileScripts.description = 'Compiles all JS files in the src/js/ directory and outputs them to dest/js/.'

/**
 * Minifies all JS files in the dest/js/ directory.
 *
 * @returns {Object} - Gulp stream.
 */
const minifyScripts = () => js.minify([paths.scripts.dest, `!${paths.min}`], paths.scripts.dest)
minifyScripts.description = 'Minifies all JS files in the dest/js/ directory.'

/**
 * Compiles and minifies all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
const build = series(compileScripts, minifyScripts)
build.description = 'Compiles and minifies all JS files.'

/**
 * Watches all JS files and lints, compiles, and minifies them.
 */
function watchFiles() {
  watch(paths.scripts.src, series(lintScripts, compileScripts, minifyScripts))
}
watchFiles.description = 'Watches all JS files and lints, compiles, and minifies them.'

// Export all tasks.
exports.lint = lintScripts
exports.lintFix = lintScriptsFix
exports.compile = compileScripts
exports.minify = minifyScripts
exports.build = build
exports.watch = watchFiles
exports.default = build
```

### Using the latest JavaScript version

If you want to use the latest greatest JavaScript, follow the [setup instructions for Gulp](https://www.npmjs.com/package/gulp#use-latest-javascript-version-in-your-gulpfile) on the official package.

Here is the example from above written in ES2015.

```jsx
import { series, watch } from 'gulp'
import { js } from '@coldfrontlabs/gulp-templates'

const paths = {
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js'
  },
  min: '**/*.min.*'
}

/**
 * Lints all JS files in the src/js/ directory.
 *
 * @returns {Object} - Gulp stream.
 */
export const lint = () => js.lint(paths.scripts.src)
lint.description = 'Lints all JS files in the src/js/ directory.'

/**
 * Lints and fixes all JS files in the src/js/ directory.
 *
 * @returns {Object} - Gulp stream.
 */
export const lintFix = () => js.fix(paths.scripts.src)
lintFix.description = 'Lints and fixes all JS files in the src/js/ directory.'

/**
 * Compiles all JS files in the src/js/ directory and outputs them to dest/js/.
 *
 * @returns {Object} - Gulp stream.
 */
export const compile = () => js.compile(paths.scripts.src, paths.scripts.dest)
compile.description = 'Compiles all JS files in the src/js/ directory and outputs them to dest/js/.'

/**
 * Minifies all JS files in the dest/js/ directory.
 *
 * @returns {Object} - Gulp stream.
 */
export const minify = () => js.minify([paths.scripts.dest, `!${paths.min}`], paths.scripts.dest)
minify.description = 'Minifies all JS files in the dest/js/ directory.'

/**
 * Compiles and minifies all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
export const build = series(compile, minify)
build.description = 'Compiles and minifies all JS files.'

/**
 * Watches all JS files and lints, compiles, and minifies them.
 */
function watchFiles() {
  watch(paths.scripts.src, series(lint, compile, minify))
}
watchFiles.description = 'Watches all JS files and lints, compiles, and minifies them.'
export { watchFiles as watch }

// Create the default task.
export default build
```

More examples can be found [here](/examples).

## [Changelog](/CHANGELOG.md)

## [License](/LICENSE)
