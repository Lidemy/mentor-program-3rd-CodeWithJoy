const request = require('request');
const process = require('process');

// 1. 用 game name 找 game id
// 2. 用 game id 找 stream
const gameName = encodeURIComponent(process.argv[2]);
const options = {
    url: 'https://api.twitch.tv/helix/games?name=' + gameName,
    headers: {
        'Client-ID': '36gk9bu9tadiz6ygu8kl7tarpl45bb',
    }
};

request(options, cb1)

function cb1(error, response, body) {
    if (!error && response.statusCode === 200) {
        var info = JSON.parse(body);
        if (info.data.length !== 0) {
            const gameId = info.data[0].id;
            const options2 = {
                url: 'https://api.twitch.tv/helix/streams?first=100&game_id=' + gameId,
                headers: {
                    'Client-ID': '36gk9bu9tadiz6ygu8kl7tarpl45bb',
                }
            };
            request(options2, function cb2(error, response, body) {
                if (!error && response.statusCode === 200) {
                    var info = JSON.parse(body);
                    for (let i = 0; i < info.data.length; i++) {
                        console.log(i + 1, info.data[i].id, info.data[i].user_name)
                    }

                    const gamePage = info.pagination.cursor;
                    const options3 = {
                        url: 'https://api.twitch.tv/helix/streams?first=100&game_id=' + gameId + '&after=' + gamePage,
                        headers: {
                            'Client-ID': '36gk9bu9tadiz6ygu8kl7tarpl45bb',
                        }
                    };
                    request(options3, function cb3(error, response, body) {
                        if (!error && response.statusCode === 200) {
                            var info = JSON.parse(body);
                            for (let i = 0; i < info.data.length; i++) {
                                console.log(i + 101, info.data[i].id, info.data[i].user_name)
                            }
                        }
                    })
                }
            })
        } else {
            console.log('遊戲名稱輸入錯誤')
        }

    }
}




