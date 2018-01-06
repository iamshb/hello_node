var googleFinance = require('google-finance');

googleFinance.companyNews({
    symbol: 'NASDAQ:AAPL'
}, function (err, news) {
 //...
    for (var each in news) {
        console.log('%j', each);
    }
});

googleFinance.historical({
    symbol: 'NASDAQ:AAPL',
    from: '2014-01-01',
    to: '2014-12-31'
}, function (err, quotes) {
 //...
    console.log(quotes);

    // for (var each in quotes) {
    //     console.log(each);
    // }
});