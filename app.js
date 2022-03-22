const { MessengerClient } = require('messaging-api-messenger');

const userId = "3755054421284641"

// get accessToken from facebook developers website
const client = new MessengerClient({
    accessToken: 'EAALPPluYZBg8BABYzRI4XaUFJ4wbaJxMUOh09DzuEZBZBkJKV2fJwvZC6z65SyeteDDkluaINdlXuViakRV01guBEiZAEAJxwaK3BLTVsES2Yz8wbCr9JOCdHzoFGjplZACMXKIhBXKZBuCOmYg9yfDXWSNWHm0fTMgsNVspjI4pqaZChe1VPbMr',
    appId: "790816685095439",
    appSecret: "013fac914053354b9d6991520e34312d",
    version: '13.0',
});

client.sendText(userId, 'Hello World').then(() => {
    console.log('sent');
});
