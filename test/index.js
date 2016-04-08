var assert = require('assert');
var glslify = require('../');
var fs = require('fs');
var path = require('path');
var clean = require('cln');

var fixture = fs.readFileSync(path.resolve(__dirname, './shader.glsl'), 'utf-8');


setTimeout(function () {
	var result = glslify('./shader.glsl');

	result = result.replace(/#[^\n]*/, '');

	assert.equal(clean(result), clean(fixture));
});
