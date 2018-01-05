
documentready
=============

Await for the `document` to be ready.

The `documentReady` async function returns a promise that will resolve when the
`DOMContentLoaded` event fires in the future (i.e. the `document` is "ready"),
or resolves immediately if `DOMContentLoaded` already happened.

You can use it in async functions:

```js
import documentReady from 'documentready'

async function main() {
  await documentReady()
  console.log( 'Ready to begin awesome!' )
}

main()
```

You can of course use it as a Promise:

```js
import documentReady from 'documentready'

documentReady()
  .then( data => console.log( 'begin awesome!' ) )
```

Chain values will pass through if you use it in a Promise chain:

```js
import documentReady from 'documentready'

fetch( ... )
  .then( ... )
  .then( documentReady ) // passes data through
  .then( data => console.log( 'use data for the awesome!', data ) )
```

Note
----

This is written in ES2016 JavaScript. To use this in pre-ES2016 environments,
you'll need to run this through a transpiler like [Babel](http://babeljs.io)
(and I recommend using the
[fast-async](https://github.com/MatAtBread/fast-async) plugin to get the best
results). See some tips here on wiring it up with
[Webpack](https://webpack.js.org): 2ality.com/2017/06/pkg-esnext.html.
