const { MessengerClient } = require('messaging-api-messenger');

const userId = "3755054421284641"

// get accessToken from facebook developers website
const client = new MessengerClient({
    accessToken: 'EAALPPluYZBg8BADZAV0AEFPqCjleHOuH3osooC8ZA5xKrZBwHTofzZA2xBqVnGV9s5d8RYUtLVwuD5tAW4kz4bXZBHhsD17BYGyjrjci1IEjbZC2H8fHfjZAYB1AtHZAfvtivJsYFf2knyZBkbFZCdurpgrjmx5CqQ06lZCudVhJst6ZB5GqMiyKqQL6q',
    appId: "790816685095439",
    appSecret: "013fac914053354b9d6991520e34312d",
    version: '13.0',
});

client.sendText(userId, 'Hello World').then(() => {
    console.log('sent');
});
