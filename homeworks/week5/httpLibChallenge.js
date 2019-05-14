//Lidemy HTTP Challenge 紀錄 網址：https://lidemy-http-challenge.herokuapp.com/start
const request = require('request');

//查找中文字 ?q=encodeURO('中文')
const str = encodeURI('我')
console.log(str);

var options = {
    url: 'https://lidemy-http-challenge.herokuapp.com/api/v2/books?q=' + str,
    headers: {
        Authorization: 'Basic YWRtaW46YWRtaW4xMjM=',
    }
};

function callback(error, response, body) {
    console.log('cb');
    if (!error && response.statusCode === 200) {
        var info = JSON.parse(body);
        for (let i = 0; i < info.length; i++) {
            if (info[i].author.length === 4 && info[i].ISBN[info[i].ISBN.length - 1] === '7') {
                console.log(info[i].id)
                const options2 = {
                    url: 'https://lidemy-http-challenge.herokuapp.com/api/v2/books/' + info[i].id,
                    form: { "ISBN": "9981835423" },
                    headers: {
                        Authorization: 'Basic YWRtaW46YWRtaW4xMjM=',
                    }
                }
                request.patch(options2, function (err, req, body) {
                    console.log(JSON.parse(body));
                })
            }
        }
    }
}

request(options, callback);

//下方為使用 IE6 瀏覽器跑出答案(第九關)
const xhr = new XMLHttpRequest();
xhr.open('PATCH', 'https://lidemy-http-challenge.herokuapp.com/api/v2/books/72', true);
xhr.setRequestHeader('X-Library-Number', 20);
xhr.setRequestHeader('Authorization', 'Basic YWRtaW46YWRtaW4xMjM=');
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
        // Success!
        const data = JSON.parse(xhr.responseText);
        console.log(data)
    };
    xhr.onerror = function (error) {
        // There was a connection error of some sort
        console.log(error)
    };
}

xhr.send('ISBN=9981835423');

//第十關猜數字： 9613
