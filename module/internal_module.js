var os = require('os');
var path = require('path');

console.log('hostname : %s', os.hostname());
// console.log('memory : %d / %d', os.freemem(), os.totalmem());
// console.log('cpu : \n' + os.cpus);
// console.log('network interfaces : \n', os.networkInterfaces());

var directories = ['users', 'mike', 'docs'];
var docsDirectory = directories.join(path.sep);
console.log('directory : %s', docsDirectory);

var curPath = path.join('/Users/mike', 'notepad.exe');
console.log('file path : %s', curPath);

var filename = '/usr/local/bin/node.js';
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);

console.log('dir : %s', dirname);
console.log('base : %s', basename);
console.log('ext : %s', extname);
