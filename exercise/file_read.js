

var fs = require('fs');

var filePath = './output.txt';
fs.open(filePath, 'r', function(err, fd) {
    if(err) throw err;

    var buf = new Buffer(10);
    console.log('is buffer ? : %s', Buffer.isBuffer(buf));

    fs.read(fd, buf, 0, buf.length, null, function(err, byteRead, buffer) {
        if(err) throw err;

        var inStr = buffer.toString('utf8', 0, byteRead);
        console.log('read data : %s', inStr);

        console.log(err, byteRead, buffer);

        fs.close(fd, function() {
            console.log('output.txt closed.');
        });
    });
});