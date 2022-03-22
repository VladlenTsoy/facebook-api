const {MessengerClient} = require('messaging-api-messenger');

const userId = "3755054421284641"

// get accessToken from facebook developers website
const client = new MessengerClient({
    accessToken: process.env.FACEBOOK_PAGE_ACCESS_TOKEN,
    appId: process.env.FACEBOOK_APP_ID,
    appSecret: process.env.FACEBOOK_APP_SECRET,
    version: process.env.FACEBOOK_APP_VERSION,
});

client.sendText(userId, 'Hello World').then(() => {
    console.log('sent');
});
