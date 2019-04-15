# Sass/SCSS Tasks

To gain access to the functions for Sass/SCSS, simply include the following in your `gulpfile.js`:

```jsx
const template = require('@coldfront/gulp-templates')
```

or

```jsx
const { sass } = require('@coldfront/gulp-templates')
```

The following are functions included in the templates specifically designed for Sass/SCSS.

All input/output paths used by these functions are the same as any other gulp task's src/dest paths.

## Linting

```jsx
template.sass.lint('input-path')
```

```jsx
sass.lint(['input-path-1', '!input-path-2', 'etc'])
```

The `lint` function will run [Stylelint](https://github.com/stylelint/stylelint) on the provided path or array of paths and output the result to the console.

## Fixing Linting Violations

```jsx
template.sass.fix('input-path')
```

```jsx
sass.fix(['input-path-1', '!input-path-2', 'etc'], 'optional-output-path')
```

The `fix` function will run [Stylelint](https://github.com/stylelint/stylelint) on the provided path or array of paths and fix all errors that it can. It will then overwrite the existing files with the fixes, and output the violations it cannot fix to the console.

If you do not want to overwrite your existing code, you can provide a destination path as a second parameter.

**Note:** Currently, gulp-stylelint does not respect .stylelintignore files while running the fix command and will overwrite "ignored" files with empty ones.

You can follow the [issue on GitHub](https://github.com/olegskl/gulp-stylelint/issues/85)

As a workaround, it is recommended that you essentially duplicate your ignored files list using the gulp task itself. You can see how to implement this in the [examples provided](/examples) in this package.

## Compiling

```jsx
template.sass.compile('input-path')
```

```jsx
sass.compile(['input-path-1', '!input-path-2', 'etc'], 'optional-output-path')
```

The `compile` function will run the Sass compiler (specifically [Node-Sass](https://github.com/sass/node-sass)) on the provided path or array of paths. It will then output the newly compiled CSS to the same directories as the source.

If you do not want to output the CSS files into their original directories, you can provide a destination path as a second parameter.
