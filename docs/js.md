# JavaScript Tasks

To gain access to the functions for JavaScript, simply include the following in your `gulpfile.js`:

```jsx
const template = require('@coldfrontlabs/gulp-templates')
```

or

```jsx
const { js } = require('@coldfrontlabs/gulp-templates')
```

The following are functions included in the templates specifically designed for JavaScript.

All input/output paths used by these functions are the same as any other gulp task's src/dest paths.

## Linting

```jsx
template.js.lint({ source: 'input-path' })
```

or

```jsx
const params = {
  source: ['input-path-1', '!input-path-2', 'etc']
}

js.lint(params)
```

The `lint` function will run [ESLint](https://github.com/eslint/eslint) on the provided path or array of paths and output the result to the console.

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
template.js.fix({ source: 'input-path' })
```

or

```jsx
const param = {
  source: ['input-path-1', '!input-path-2', 'etc'],
  destination: 'optional-output-path'
}

js.fix(params)
```

The `fix` function will run [ESLint](https://github.com/eslint/eslint) on the provided path or array of paths and fix all errors that it can. It will then overwrite the existing files with the fixes, and output the violations it cannot fix to the console.

If you do not want to overwrite your existing code, you can provide a destination path as a second parameter.

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
template.js.compile({ source: 'input-path' })
```

or

```jsx
const params = {
  source: ['input-path-1', '!input-path-2', 'etc'],
  destination: 'optional-output-path'
}

js.compile(params)
```

The `compile` function will run [Babel](https://github.com/babel/babel) on the provided path or array of paths. It will then overwrite the existing files with the changes.

If you do not want to overwrite your existing code, you can provide a destination path as a second parameter.

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

## Minifying

```jsx
template.js.minify({ source: 'input-path' })
```

or

```jsx
const params = {
  source: ['input-path-1', '!input-path-2', 'etc'],
  destination: 'optional-output-path'
}

js.minify(params)
```

The `minify` function will run [Terser](https://github.com/terser-js/terser) on the provided path or array of paths. It will then rename and output the newly minified files into the same directories as the source.

If you do not want to output the minified files into their original directories, you can provide a destination path as a second parameter.

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
