const request = require('request');

const options = {
    url: 'https://api.twitch.tv/helix/streams?game_id=21779&first=1',
    headers: {
        'Client-ID': '36gk9bu9tadiz6ygu8kl7tarpl45bb'
    }
};

function callback(error, response, body) {
    let pageCursor = "";
    if (!error && response.statusCode == 200) {
        const info = JSON.parse(body);
        pageCursor = info.pagination.cursor;
        console.log(info.data[0].user_id, info.data[0].user_name);
        console.log(info.data.length);
        console.log('hi')
        /* for (let i = 0; i < info.data.length; i++) {
            console.log(info.data[i].id, info.data[i].name);
        } */
        const options2 = {
            url: 'https://api.twitch.tv/helix/streams?game_id=21779&first=1&after=' + pageCursor,
            headers: {
                'Client-ID': '36gk9bu9tadiz6ygu8kl7tarpl45bb'
            }
        };
        return options2;

    }
}
request(options, callback)
//request(options2, callback)

const promise = new Promise(function (resolve, reject) {
    if (request(options, callback)) {
        resolve(value);
    } else {
        reject(error);
    }
});

promise.then(function (value) {
    console.log('promise', value)
}, function (err) {
    console.log('promise', err)
}) 