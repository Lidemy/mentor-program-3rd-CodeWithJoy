const request = require('request');

request.get('https://lidemy-book-store.herokuapp.com/books?_limit=10', function (error, response, body) {
    const data = JSON.parse(body);
    data.map((e) => { console.log(e.id, e.name) })
});

//另一種寫法：
/* request('https://lidemy-book-store.herokuapp.com/books', function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode);
    const data = JSON.parse(body);
    for (let i = 0; i <= 9; i += 1) {
        console.log(data[i].id, data[i].name);
    }
}); */
