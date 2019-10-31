# @coldfrontlabs/gulp-templates

[![NPM Version](https://img.shields.io/npm/v/@coldfrontlabs/gulp-templates.svg?style=for-the-badge)](https://www.npmjs.org/package/@coldfrontlabs/gulp-templates)
[![License](https://img.shields.io/github/license/coldfrontlabs/gulp-templates.svg?style=for-the-badge)](/LICENSE)

Templates for quick gulp task set-up.

This project assumes users have a basic understanding of how Gulp works. If you require more information on the basics of Gulp, please read the [official documentation](https://gulpjs.com/docs/en/getting-started/quick-start).

## Installation

```cmd
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

## Sample gulpfile.js

This file will give you a basic example of how to use the templates.

```jsx
// Get gulp components and templates.
const { series } = require('gulp')
const { js } = require('@coldfrontlabs/gulp-templates')

const paths = {
  js: {
    src: 'src/js',
    dest: 'dist/js',
    selector: '**/*.js'
  },
  min: '**/*.min.*'
}

/**
 * Lints all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
const lintScripts = () => js.lint({
  source: `${paths.js.src}/${paths.js.selector}`
})
lintScripts.description = 'Lints all JS files.'

/**
 * Lints and fixes all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
const lintScriptsFix = () => js.fix({
  source: `${paths.js.src}/${paths.js.selector}`
})
lintScriptsFix.description = 'Lints and fixes all JS files.'

/**
 * Compiles all JS files using Babel.
 *
 * @returns {Object} - Gulp stream.
 */
const compileScripts = () => js.compile({
  source: `${paths.js.src}/${paths.js.selector}`,
  destination: paths.js.dest
})
compileScripts.description = 'Compiles all JS files using Babel.'

/**
 * Minifies all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
const minifyScripts = () => js.minify({
  source: [`${paths.js.dest}/${paths.js.selector}`, `!${paths.min}`],
  destination: paths.js.dest
})
minifyScripts.description = 'Minifies all JS files.'

/**
 * Lints, compiles, and minifies all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
const buildDev = series(lintScripts, compileScripts, minifyScripts)
buildDev.description = 'Lints, compiles, and minifies all JS files.'

/**
 * Compiles and minifies all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
const buildProd = series(compileScripts, minifyScripts)
buildProd.description = 'Compiles and minifies all JS files.'

// Export linting tasks.
exports.lintScripts = lintScripts
exports.lintScriptsFix = lintScriptsFix

// Export compiling task.
exports.compileScripts = compileScripts

// Export minifying task.
exports.minifyScripts = minifyScripts

// Export build tasks.
exports.buildDev = buildDev
exports.buildProd = buildProd

// Export default task.
exports.default = buildProd

```

### Using the latest JavaScript version

If you want to use the latest greatest JavaScript, follow the [setup instructions for Gulp](https://www.npmjs.com/package/gulp#use-latest-javascript-version-in-your-gulpfile) on the official package.

Here is the example from above written in ES2015.

```jsx
// Get gulp components and templates.
import { series } from 'gulp'
import { js } from '@coldfrontlabs/gulp-templates'

const paths = {
  js: {
    src: 'src/js',
    dest: 'dist/js',
    selector: '**/*.js'
  },
  min: '**/*.min.*'
}

/**
 * Lints all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
export const lintScripts = () => js.lint({
  source: `${paths.js.src}/${paths.js.selector}`
})
lintScripts.description = 'Lints all JS files.'

/**
 * Lints and fixes all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
export const lintScriptsFix = () => js.fix({
  source: `${paths.js.src}/${paths.js.selector}`
})
lintScriptsFix.description = 'Lints and fixes all JS files.'

/**
 * Compiles all JS files using Babel.
 *
 * @returns {Object} - Gulp stream.
 */
export const compileScripts = () => js.compile({
  source: `${paths.js.src}/${paths.js.selector}`,
  destination: paths.js.dest
})
compileScripts.description = 'Compiles all JS files using Babel.'

/**
 * Minifies all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
export const minifyScripts = () => js.minify({
  source: [`${paths.js.dest}/${paths.js.selector}`, `!${paths.min}`],
  destination: paths.js.dest
})
minifyScripts.description = 'Minifies all JS files.'

/**
 * Lints, compiles, and minifies all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
export const buildDev = series(lintScripts, compileScripts, minifyScripts)
buildDev.description = 'Lints, compiles, and minifies all JS files.'

/**
 * Compiles and minifies all JS files.
 *
 * @returns {Object} - Gulp stream.
 */
export const buildProd = series(compileScripts, minifyScripts)
buildProd.description = 'Compiles and minifies all JS files.'

// Create default tasks
export default buildProd

```

More examples can be found [here](/examples).

## [Changelog](/CHANGELOG.md)

## [License](/LICENSE)
