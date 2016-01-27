var execSync = require('child_process').execSync;
var moduleBin = require('module-bin');
var path = require('path');

function glslifySync(filePath) {
    var glslifyBinPath = moduleBin('glslify');
    var glslifyBinAbsolutePath = path.resolve('/', glslifyBinPath);
    return execSync(glslifyBinAbsolutePath + ' ' + filePath, { encoding: 'utf8' });
}

module.exports = glslifySync;
