var fs = require('fs');

var filePath = '../README.md';

fs.readFile(filePath, 'utf8', function(err, data) {
    console.log('async data : \n');
    console.log(data);
});

var data = fs.readFileSync(filePath, 'utf8');
console.log('sync data : \n');
console.log(data);