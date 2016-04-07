var callsite = require('callsite');
var path = require('path');

var glslifySync;

//try using deasync, if available
try {
	var deasync = require('deasync');
	var bundle = require('glslify-bundle');
	var deps = require('glslify-deps');

	glslifySync = function (filePath) {
		var runSync = deasync(function (filePath, cb) {
			deps().add(filePath, cb);
		});

		var tree = runSync(filePath);
		var glsl = bundle(tree);

		return glsl;
	}
}

//execSync fallback
catch (e) {
	var execSync = require('child_process').execSync;
	var moduleBin = require('module-bin');

	glslifySync = function (filePath) {
		var glslifyBinPath = moduleBin('glslify');
		var glslifyBinAbsolutePath = path.resolve('/', glslifyBinPath);
		return execSync(glslifyBinAbsolutePath + ' ' + filePath, { encoding: 'utf8' });
	}
}


function glslify (filePath) {
	if (!filePath) return '';

	if (!path.isAbsolute(filePath)) {
		var stack = callsite();
		var caller = stack[1].getFileName();
		filePath = path.resolve(path.dirname(caller), filePath)
	}

	return glslifySync(filePath);
}


module.exports = glslify;