process.on('exit', function() {
    console.log('exit event');
});

process.on('tick', function(code) {
    console.log('tick event ' + code);
});

console.log('emit after 2sec')

setTimeout(function() {
    process.emit('tick', 2);
    process.exit();
}, 2000);
