# Sass/SCSS Tasks

To gain access to the functions for Sass/SCSS, simply include the following in your `gulpfile.js`:

```js
const template = require('@coldfrontlabs/gulp-templates')
```

or

```js
const { sass } = require('@coldfrontlabs/gulp-templates')
```

The following are functions included in the templates specifically designed for Sass/SCSS.

All input/output paths used by these functions are the same as any other gulp task's src/dest paths.

## Linting

```js
template.sass.lint({ source: 'input-path' })
```

or

```js
const params = {
  source: ['input-path-1', '!input-path-2', 'etc']
}

sass.lint(params)
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
template.sass.fix({ source: 'input-path' })
```

or

```js
const param = {
  source: ['input-path-1', '!input-path-2', 'etc'],
  destination: 'optional-output-path'
}

sass.fix(params)
```

The `fix` function will run [Stylelint](https://github.com/stylelint/stylelint) on the provided path or array of paths and fix all errors that it can. It will then overwrite the existing files with the fixes, and output the violations it cannot fix to the console.

If you do _not_ want to overwrite your existing code, you can provide a destination path as a second parameter.

**Note:** Currently, gulp-stylelint does not respect .stylelintignore files while running the fix command and will overwrite "ignored" files with empty ones.

You can follow the [issue on GitHub](https://github.com/olegskl/gulp-stylelint/issues/85)

As a workaround you can use node to read and output your .stylelintignore file as an array of blobs (see [provided example](/examples/sass-ignore.gulpfile.js)).

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
template.sass.compile({ source: 'input-path' })
```

or

```js
const params = {
  source: ['input-path-1', '!input-path-2', 'etc'],
  destination: 'optional-output-path'
}

sass.compile(params)
```

The `compile` function will run the [Sass](https://www.npmjs.com/package/sass) compiler and [PostCSS](https://github.com/postcss/postcss) (specifically [Autoprefixer](https://github.com/postcss/autoprefixer)) on the provided path or array of paths. It will then output the newly compiled CSS to the same directories as the source.

If you do _not_ want to output the CSS files into their original directories, you can provide a destination path as a second parameter.

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
