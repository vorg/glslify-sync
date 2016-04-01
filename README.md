# glslify-sync

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

A synchronous wrapper for glslify, providing a consistent interface between both Node.js and browserify.

In node.js it works by synchronousily executing glsl in the command line via `execSync`.

## Usage

[![NPM](https://nodei.co/npm/glslify-sync.png)](https://www.npmjs.com/package/glslify-sync)

### `glsl = glslify(file)`

For example

```javascript
var glslify = require('glslify-sync')
var source = glslify('./shader.glsl')

console.log(source) // your glslified GLSL source!
```


To use it in browserify either add it as a transform parameter

```
browserify main.js -t glslify-sync/transform
```

or add to your `package.json`

```
{
  "browserify": {
    "transform": [
      "glslify-sync/transform"
    ]
  }
}
```


## License

MIT, see [LICENSE.md](http://github.com/vorg/glslify-sync/blob/master/LICENSE.md) for details.
