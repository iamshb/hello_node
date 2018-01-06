var fs = require('fs');
var request = require('request');
var download = require('download-file');

var url = 'http://kind.krx.co.kr/corpgeneral/corpList.do?method=download&searchType=13';

// var options = {
//    directory: "./",
//    filename: "test.txt"
// }

// download(url, options, function(err){
//    if (err) throw err
//    console.log("meow")
// }) 

// var url = 'http://kind.krx.co.kr/corpgeneral/corpList.do?method=download&searchType=13';
// var target = '/Users/shin/git/hello_node/crawler';
// var progress = download(url, target, function(size, total) {

// });

request(url, function(err, resp, body) {
    if (err != null) {
        console.log(err);
    }
    
    console.log(body);
});