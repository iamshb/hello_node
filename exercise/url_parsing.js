var url = require('url');
var queryString = require('querystring');

// * url test
var curURL = url.parse('http://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty');
var curStr = url.format(curURL);

// console.log('url string : %s', curStr);
// console.dir(curURL);


// * querystring test
var param = queryString.parse(curURL.query);

console.log('query : %s', param.query);
console.log('where : %s', param.where);
console.log('param : %s', queryString.stringify(param));