const request = require('request');

request('https://lidemy-book-store.herokuapp.com/books', function (body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode);
    const data = JSON.parse(body);
    for (let i = 0; i <= 10; i += 1) {
        console.log(data[i].id, data[i].name);
    }
});
