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
template.js.lint('input-path')
```

```jsx
js.lint(['input-path-1', '!input-path-2', 'etc'])
```

The `lint` function will run [ESLint](https://github.com/eslint/eslint) on the provided path or array of paths and output the result to the console.

## Fixing Linting Violations

```jsx
template.js.fix('input-path')
```

```jsx
js.fix(['input-path-1', '!input-path-2', 'etc'], 'optional-output-path')
```

The `fix` function will run [ESLint](https://github.com/eslint/eslint) on the provided path or array of paths and fix all errors that it can. It will then overwrite the existing files with the fixes, and output the violations it cannot fix to the console.

If you do not want to overwrite your existing code, you can provide a destination path as a second parameter.

## Compiling

```jsx
template.js.compile('input-path')
```

```jsx
js.compile(['input-path-1', '!input-path-2', 'etc'], 'optional-output-path')
```

The `compile` function will run [Babel](https://github.com/babel/babel) on the provided path or array of paths. It will then overwrite the existing files with the changes.

If you do not want to overwrite your existing code, you can provide a destination path as a second parameter.

## Minifying

```jsx
template.js.minify('input-path')
```

```jsx
js.minify(['input-path-1', '!input-path-2', 'etc'], 'optional-output-path')
```

The `minify` function will run [Terser](https://github.com/terser-js/terser) on the provided path or array of paths. It will then rename and output the newly minified files into the same directories as the source.

If you do not want to output the minified files into their original directories, you can provide a destination path as a second parameter.
