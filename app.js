const { MessengerClient } = require('messaging-api-messenger');

const userId = "3755054421284641"

// get accessToken from facebook developers website
const client = new MessengerClient({
    accessToken: 'EAALPPluYZBg8BAFWvZBrWeMgn3UlDDAKNLnhWrGHfFqQ6N9eumCqZBCT333XfrIZCFJgldSXc7QzfMi9eVbb5EgHup8Q1t1Gf44huBpfamGynUtYjstCdsCXJs2rBif15nO6u9NqksDRof8gnRT94g1mGaMIZAFfKWjyt57ZCdcJm8JtUvPROc',
    appId: "790816685095439",
    appSecret: "013fac914053354b9d6991520e34312d",
    version: '13.0',
});

client.sendText(userId, 'Hello World').then(() => {
    console.log('sent');
});
