const request = require('request');

request('https://lidemy-book-store.herokuapp.com/books', function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    const data = JSON.parse(body);
    for (i = 0; i <= 10; i++) {
        console.log(data[i].id, data[i].name);
    }
});
