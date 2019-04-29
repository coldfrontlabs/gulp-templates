# CSS Tasks

To gain access to the functions for CSS, simply include the following in your `gulpfile.js`:

```jsx
const template = require('@coldfrontlabs/gulp-templates')
```

or

```jsx
const { css } = require('@coldfrontlabs/gulp-templates')
```

The following are functions included in the templates specifically designed for CSS.

All input/output paths used by these functions are the same as any other gulp task's src/dest paths.

## Linting

```jsx
template.css.lint('input-path')
```

```jsx
css.lint(['input-path-1', '!input-path-2', 'etc'])
```

The `lint` function will run [Stylelint](https://github.com/stylelint/stylelint) on the provided path or array of paths and output the result to the console.

### Options

| Name | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| source | string or array of strings | null | true | The source path or paths. |
| sourceOptions | object | {} | false | Any options you want to pass to the source. See the [official documentation](https://gulpjs.com/docs/en/api/src#options) for more information. |

## Fixing Linting Violations

```jsx
template.css.fix('input-path')
```

```jsx
css.fix(['input-path-1', '!input-path-2', 'etc'], 'optional-output-path')
```

The `fix` function will run [Stylelint](https://github.com/stylelint/stylelint) on the provided path or array of paths and fix all errors that it can. It will then overwrite the existing files with the fixes, and output the violations it cannot fix to the console.

If you do not want to overwrite your existing code, you can provide a destination path as a second parameter.

### Options

| Name | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| source | string or array of strings | null | true | The source path or paths. |
| destination | string | null | false | The destination path. Will default to "." if no path is provided. |
| sourceOptions | object | {} | false | Any options you want to pass to the source. See the [official documentation](https://gulpjs.com/docs/en/api/src#options) for more information. |
| destinationOptions | object | {} | false | Any options you want to pass to the destination. See the [official documentation](https://gulpjs.com/docs/en/api/dest#options) for more information. |

## Compiling

```jsx
template.css.compile('input-path')
```

```jsx
css.compile(['input-path-1', '!input-path-2', 'etc'], 'optional-output-path')
```

The `compile` function will run [PostCSS](https://github.com/postcss/postcss) (specifically [Autoprefixer](https://github.com/postcss/autoprefixer)) on the provided path or array of paths. It will then overwrite the existing files with the changes.

If you do not want to overwrite your existing code, you can provide a destination path as a second parameter.

### Options

| Name | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| source | string or array of strings | null | true | The source path or paths. |
| destination | string | null | false | The destination path. Will default to "." if no path is provided. |
| sourceOptions | object | {} | false | Any options you want to pass to the source. See the [official documentation](https://gulpjs.com/docs/en/api/src#options) for more information. |
| destinationOptions | object | {} | false | Any options you want to pass to the destination. See the [official documentation](https://gulpjs.com/docs/en/api/dest#options) for more information. |

## Minifying

```jsx
template.css.minify('input-path')
```

```jsx
css.minify(['input-path-1', '!input-path-2', 'etc'], 'optional-output-path')
```

The `minify` function will run [PostCSS](https://github.com/postcss/postcss) (specifically [CSSnano](https://github.com/cssnano/cssnano) and [Discard Comments](https://github.com/ben-eb/postcss-discard-comments)) on the provided path or array of paths. It will then rename and output the newly minified files into the same directories as the source.

If you do not want to output the minified files into their original directories, you can provide a destination path as a second parameter.

### Options

| Name | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| source | string or array of strings | null | true | The source path or paths. |
| destination | string | null | false | The destination path. Will default to "." if no path is provided. |
| sourceOptions | object | {} | false | Any options you want to pass to the source. See the [official documentation](https://gulpjs.com/docs/en/api/src#options) for more information. |
| destinationOptions | object | {} | false | Any options you want to pass to the destination. See the [official documentation](https://gulpjs.com/docs/en/api/dest#options) for more information. |
