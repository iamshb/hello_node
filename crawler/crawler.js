var request = require('request');
var cheerio = require('cheerio');

// var url = 'http://finance.naver.com/item/sise_day.nhn?code=057680';
var url = 'http://finance.naver.com/item/frgn.nhn?code=035420';

request(url, function(error, response, body) {
    if (error) throw error;
    var $ = cheerio.load(body);
    var prices = $("table.type2 tbody tr");
    
    prices.each(function() {
        // var price = $(this).text();
        var date = $(this).children().eq(0).text();
        var price = $(this).children().eq(1).text();
        // var price = $(this).find("td.num span.tah.p11").first().text();
        // var price = $(this).find("td.num span.tah.p11").text();
        if (price.length > 0) {
            console.log(date + " : " + price);
        }
    });
});