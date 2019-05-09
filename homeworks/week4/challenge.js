const request = require('request');

const options = {
    url: 'https://api.twitch.tv/helix/streams?game_id=21779&first=100',
    headers: {
        'Client-ID': '36gk9bu9tadiz6ygu8kl7tarpl45bb',
    }
};

function cb1(error, response, body) {
    let pageCursor = "";
    if (!error && response.statusCode === 200) {
        const info = JSON.parse(body);
        pageCursor = info.pagination.cursor;
        for (let i = 0; i < info.data.length; i++) {
            console.log(i + 1, info.data[i].id, info.data[i].user_name);
        }
    }
    const options2 = {
        url: 'https://api.twitch.tv/helix/streams?game_id=21779&first=100&after=' + pageCursor,
        headers: {
            'Client-ID': '36gk9bu9tadiz6ygu8kl7tarpl45bb'
        }
    };
    request(options2, function cb2(error, response, body) {
        if (!error && response.statusCode == 200) {
            const info = JSON.parse(body);
            for (let i = 0; i < info.data.length; i++) {
                console.log(i + 101, info.data[i].id, info.data[i].user_name);
            }
        }
    })
}
request(options, cb1);
