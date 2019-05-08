const request = require('request');

const options = {
    url: 'https://api.twitch.tv/helix/games/top',
    headers: {
        'Client-ID': '36gk9bu9tadiz6ygu8kl7tarpl45bb',
    }
};

function callback(error, response, body) {
    if (!error && response.statusCode === 200) {
        const info = JSON.parse(body);
        for (let i = 0; i < info.data.length; i += 1) {
            console.log(info.data[i].id, info.data[i].name);
        }
    }
}

request(options, callback);

/*
curl - H '36gk9bu9tadiz6ygu8kl7tarpl45bb' \
curl -X GET 'https://api.twitch.tv/helix/streams?game_id=33214' */