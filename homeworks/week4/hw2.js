const request = require('request');
const process = require('process')
request('https://lidemy-book-store.herokuapp.com/books', function (error, response, body) {
    const data = JSON.parse(body);
    let idNum = parseInt(process.argv[3]);
    if (process.argv[2] === 'list') { // 印出前20本書
        for (let i = 0; i <= 19; i += 1) {
            console.log(data[i].id, data[i].name)
        }
    } else if (process.argv[2] === 'read') {
        if (isNaN(idNum)) {
            console.log('please type a number after "read"');
        } else {
            request('https://lidemy-book-store.herokuapp.com/books/' + idNum, function (error, response, body) {
                const data = JSON.parse(body);
                console.log(data.id, data.name);
            })
        }
    }
});
