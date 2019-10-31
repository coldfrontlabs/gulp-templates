# Library/Dependency Tasks

To gain access to the functions for libraries and dependencies, simply include the following in your `gulpfile.js`:

```jsx
const template = require('@coldfrontlabs/gulp-templates')
```

or

```jsx
const { lib } = require('@coldfrontlabs/gulp-templates')
```

The following are functions included in the templates specifically designed for libraries and dependencies.

All input/output paths used by these functions are the same as any other gulp task's src/dest paths.

## Fetching

```jsx
template.lib.fetch({ source: 'input-path', destination: 'output-path' })
```

or

```jsx
const params = {
  source: ['input-path-1', '!input-path-2', 'etc'],
  destination: 'output-path'
}

lib.fetch(params)
```

The `fetch` function will simply fetch the provided path or array of paths and move them to the provided output directory.

### Options

| Name | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| source | string or array of strings | null | true | The source path or paths. |
| destination | string | null | true | The destination path. |
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
