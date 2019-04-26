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
template.lib.fetch('input-path', 'output-path')
```

```jsx
lib.fetch(['input-path-1', '!input-path-2', 'etc'], 'output-path')
```

The `fetch` function will simply fetch the provided path or array of paths and move them to the provided output directory.
