# CSS Tasks

To gain access to the functions for CSS include the following in your `gulpfile.js`:

```js
const template = require('@coldfrontlabs/gulp-templates')
```

or

```js
const { css } = require('@coldfrontlabs/gulp-templates')
```

The following are functions included in the templates specifically designed for CSS.

All input/output paths used by these functions are the same as any other gulp task's src/dest paths.

## Linting

```js
template.css.lint({ source: 'input-path' })
```

or

```js
const params = {
  source: ['input-path-1', '!input-path-2', 'etc']
}

css.lint(params)
```

The `lint` function will run [Stylelint](https://github.com/stylelint/stylelint) on the provided path or array of paths and output the result to the console.

### Linting Options

All options must be passed within a single parameter object.

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| source | The source path or paths. | string or array of strings | true | `null` |
| sourceOptions | Any options you want to pass to the source. See the [official documentation](https://gulpjs.com/docs/en/api/src#options) for more information. | object | false | `{}` |

## Fixing Linting Violations

```js
template.css.fix({ source: 'input-path' })
```

or

```js
const param = {
  source: ['input-path-1', '!input-path-2', 'etc'],
  destination: 'optional-output-path'
}

css.fix(params)
```

The `fix` function will run [Stylelint](https://github.com/stylelint/stylelint) on the provided path or array of paths and fix all errors that it can. It will then overwrite the existing files with the fixes, and output the violations it cannot fix to the console.

If you do _not_ want to overwrite your existing code, you can provide a destination path as a second parameter.

### Fixing Options

All options must be passed within a single parameter object.

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| source | The source path or paths. | string or array of strings | true | `null` |
| destination | The destination path. Will default to "." if no path is provided. | string | false | `null` |
| sourceOptions | Any options you want to pass to the source. See the [official documentation](https://gulpjs.com/docs/en/api/src#options) for more information. | object | false | `{}` |
| destinationOptions | Any options you want to pass to the destination. See the [official documentation](https://gulpjs.com/docs/en/api/dest#options) for more information. | object | false | `{}` |

## Compiling

```js
template.css.compile({ source: 'input-path' })
```

or

```js
const params = {
  source: ['input-path-1', '!input-path-2', 'etc'],
  destination: 'optional-output-path'
}

css.compile(params)
```

The `compile` function will run [PostCSS](https://github.com/postcss/postcss) (specifically [Autoprefixer](https://github.com/postcss/autoprefixer)) on the provided path or array of paths. It will then overwrite the existing files with the changes.

If you do _not_ want to overwrite your existing code, you can provide a destination path as a second parameter.

Sourcemaps can also be generated using [gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps) by setting the `sourcemap` parameter to `true`.

### Compiling Options

All options must be passed within a single parameter object.

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| source | The source path or paths. | string or array of strings | true | `null` |
| destination | The destination path. Will default to "." if no path is provided. | string | false | `null` |
| sourceOptions | Any options you want to pass to the source. See the [official documentation](https://gulpjs.com/docs/en/api/src#options) for more information. | object | false | `{}` |
| destinationOptions | Any options you want to pass to the destination. See the [official documentation](https://gulpjs.com/docs/en/api/dest#options) for more information. | object | false | `{}` |
| sourcemap | A toggle to generate sourcemaps. | boolean | false | `false` |
| sourcemapOptions | Options for generating sourcemaps. See the [official documentation](https://github.com/gulp-sourcemaps/gulp-sourcemaps#usage) for more information | object | false | `{}` |

## Minifying

```js
template.css.minify({ source: 'input-path' })
```

or

```js
const params = {
  source: ['input-path-1', '!input-path-2', 'etc'],
  destination: 'optional-output-path'
}

css.minify(params)
```

The `minify` function will run [PostCSS](https://github.com/postcss/postcss) (specifically [CSSnano](https://github.com/cssnano/cssnano) and [Discard Comments](https://github.com/ben-eb/postcss-discard-comments)) on the provided path or array of paths. It will then rename and output the newly minified files into the same directories as the source.

If you do _not_ want to output the minified files into their original directories, you can provide a destination path as a second parameter.

Sourcemaps can also be generated using [gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps) by setting the `sourcemap` parameter to `true`.

### Minifying Options

All options must be passed within a single parameter object.

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| source | The source path or paths. | string or array of strings | true | `null` |
| destination | The destination path. Will default to "." if no path is provided. | string | false | `null` |
| sourceOptions | Any options you want to pass to the source. See the [official documentation](https://gulpjs.com/docs/en/api/src#options) for more information. | object | false | `{}` |
| destinationOptions | Any options you want to pass to the destination. See the [official documentation](https://gulpjs.com/docs/en/api/dest#options) for more information. | object | false | `{}` |
| sourcemap | A toggle to generate sourcemaps. | boolean | false | `false` |
| sourcemapOptions | Options for generating sourcemaps. See the [official documentation](https://github.com/gulp-sourcemaps/gulp-sourcemaps#usage) for more information | object | false | `{}` |
