var path = require('path');
var callsite = require('callsite');
var bundle = require('glslify-bundle');
var deps = require('glslify-deps');
var path = require('path');
var deasync = require('deasync');

function glslifySync (filePath) {
	if (!filePath) return '';

	if (!path.isAbsolute(filePath)) {
		var stack = callsite();
		var caller = stack[1].getFileName();
		filePath = path.resolve(path.dirname(caller), filePath)
	}

	var runSync = deasync(function (filePath, cb) {
		deps().add(filePath, cb);
	});

	var tree = runSync(filePath);
	var glsl = bundle(tree);

	return glsl;
}

module.exports = glslifySync;