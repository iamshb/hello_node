function add(a, b, callback) {
    var result = a + b;
    callback(result);

    var count = 0;
    var history = function() {
        count++;
        return count + ' : ' + a + ' + ' + b + ' = ' + result;
    }

    return history;
}

var add_history = add(3, 5, function(result) {
    console.log('파라미터로 전달된 함수');
    console.log('result of add(10,10) : %d', result);
});

console.log(add_history());
console.log(add_history());
console.log(add_history());