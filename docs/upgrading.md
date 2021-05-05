# Upgrade Guide

How to upgrade major versions.

## Upgrading from 1.x to 2.x

The big change from version 1 to 2 of gulp-templates is how we declare function parameters.

In version 1, all of the functions you could call look something like this:

```js
const js = {
  // ...
  compile: (source, destination, sourceOptions = {}, destinationOptions = {}) => {
    // Do stuff...
  }
  // ...
}
```

And you would call them like so:

```js
js.compile('source-path', 'desintation-path', { sourceOptionOne: 'do something' }, { destinationOptionOne: 'do something' })
```

In version 2, we've changed all parameters to be passed through a single object:

```js
const js = {
  // ...
  compile: ({ source, destination, sourceOptions = {}, destinationOptions = {} }) => {
    // Do stuff...
  }
  // ...
}
```

So you'll need to change your function calls to reflect this:

```js
js.compile({
  source: 'source-path',
  destination: 'desintation-path',
  sourceOptions: { sourceOptionOne: 'do something' },
  destinationOptions: { destinationOptionOne: 'do something' }
})
```

This change also allows you to pre-define parameters inside of a variable and pass it that way:

```js
const params = {
  source: 'source-path',
  destination: 'desintation-path',
  sourceOptions: {
    sourceOptionOne: 'do something'
  },
  destinationOptions: {
    destinationOptionOne: 'do something'
  }
}

js.compile(params)
```
