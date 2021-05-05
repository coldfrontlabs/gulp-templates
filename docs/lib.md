# Library/Dependency Tasks

To gain access to the functions for libraries and dependencies, simply include the following in your `gulpfile.js`:

```js
const template = require('@coldfrontlabs/gulp-templates')
```

or

```js
const { lib } = require('@coldfrontlabs/gulp-templates')
```

The following are functions included in the templates specifically designed for libraries and dependencies.

All input/output paths used by these functions are the same as any other gulp task's src/dest paths.

## Fetching

```js
template.lib.fetch({ source: 'input-path', destination: 'output-path' })
```

or

```js
const params = {
  source: ['input-path-1', '!input-path-2', 'etc'],
  destination: 'output-path'
}

lib.fetch(params)
```

The `fetch` function will fetch the provided path or array of paths and move them to the provided output directory.

### Options

All options must be passed within a single parameter object.

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| source | The source path or paths. | string or array of strings | true | `null` |
| destination | The destination path. | string | true | `null` |
| sourceOptions | Any options you want to pass to the source. See the [official documentation](https://gulpjs.com/docs/en/api/src#options) for more information. | object | false | `{}` |
| destinationOptions | Any options you want to pass to the destination. See the [official documentation](https://gulpjs.com/docs/en/api/dest#options) for more information. | object | false | `{}` |
