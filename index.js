var execSync = require('child_process').execSync;
var moduleBin = require('module-bin');
var path = require('path');
var callsite = require('callsite');

function glslifySync(filePath) {
    var glslifyBinPath = moduleBin('glslify');
    var glslifyBinAbsolutePath = path.resolve('/', glslifyBinPath);

    if (!path.isAbsolute(filePath)) {
	    var stack = callsite();
	    var caller = stack[1].getFileName();
	    filePath = path.resolve(path.dirname(caller), filePath)
    }

    return execSync(glslifyBinAbsolutePath + ' ' + filePath, { encoding: 'utf8' });
}

module.exports = glslifySync;
