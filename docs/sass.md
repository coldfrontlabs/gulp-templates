# Sass/SCSS Tasks

To gain access to the functions for Sass/SCSS, simply include the following in your `gulpfile.js`:

```jsx
const template = require('@coldfrontlabs/gulp-templates')
```

or

```jsx
const { sass } = require('@coldfrontlabs/gulp-templates')
```

The following are functions included in the templates specifically designed for Sass/SCSS.

All input/output paths used by these functions are the same as any other gulp task's src/dest paths.

## Linting

```jsx
template.sass.lint({ source: 'input-path' })
```

or

```jsx
const params = {
  source: ['input-path-1', '!input-path-2', 'etc']
}

sass.lint(params)
```

The `lint` function will run [Stylelint](https://github.com/stylelint/stylelint) on the provided path or array of paths and output the result to the console.

### Options

| Name | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| source | string or array of strings | null | true | The source path or paths. |
| sourceOptions | object | {} | false | Any options you want to pass to the source. See the [official documentation](https://gulpjs.com/docs/en/api/src#options) for more information. |

**Important Note:** _All_ options must be passed within a single parameter object.

```jsx
{
  source: '',
  sourceOptions: {}
}
```

## Fixing Linting Violations

```jsx
template.sass.fix({ source: 'input-path' })
```

or

```jsx
const param = {
  source: ['input-path-1', '!input-path-2', 'etc'],
  destination: 'optional-output-path'
}

sass.fix(params)
```

The `fix` function will run [Stylelint](https://github.com/stylelint/stylelint) on the provided path or array of paths and fix all errors that it can. It will then overwrite the existing files with the fixes, and output the violations it cannot fix to the console.

If you do not want to overwrite your existing code, you can provide a destination path as a second parameter.

**Note:** Currently, gulp-stylelint does not respect .stylelintignore files while running the fix command and will overwrite "ignored" files with empty ones.

You can follow the [issue on GitHub](https://github.com/olegskl/gulp-stylelint/issues/85)

As a workaround, it is recommended that you essentially duplicate your ignored files list using the gulp task itself. You can see how to implement this in the [examples provided](/examples) in this package.

### Options

| Name | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| source | string or array of strings | null | true | The source path or paths. |
| destination | string | null | false | The destination path. Will default to "." if no path is provided. |
| sourceOptions | object | {} | false | Any options you want to pass to the source. See the [official documentation](https://gulpjs.com/docs/en/api/src#options) for more information. |
| destinationOptions | object | {} | false | Any options you want to pass to the destination. See the [official documentation](https://gulpjs.com/docs/en/api/dest#options) for more information. |

**Important Note:** _All_ options must be passed within a single parameter object.

```jsx
{
  source: '',
  destination: '',
  sourceOptions: {},
  destinationOptions: {}
}
```

## Compiling

```jsx
template.sass.compile({ source: 'input-path' })
```

or

```jsx
const params = {
  source: ['input-path-1', '!input-path-2', 'etc'],
  destination: 'optional-output-path'
}

sass.compile(params)
```

The `compile` function will run the Sass compiler (specifically [Node-Sass](https://github.com/sass/node-sass)) on the provided path or array of paths. It will then output the newly compiled CSS to the same directories as the source.

If you do not want to output the CSS files into their original directories, you can provide a destination path as a second parameter.

### Options

| Name | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| source | string or array of strings | null | true | The source path or paths. |
| destination | string | null | false | The destination path. Will default to "." if no path is provided. |
| sourceOptions | object | {} | false | Any options you want to pass to the source. See the [official documentation](https://gulpjs.com/docs/en/api/src#options) for more information. |
| destinationOptions | object | {} | false | Any options you want to pass to the destination. See the [official documentation](https://gulpjs.com/docs/en/api/dest#options) for more information. |

**Important Note:** _All_ options must be passed within a single parameter object.

```jsx
{
  source: '',
  destination: '',
  sourceOptions: {},
  destinationOptions: {}
}
```
