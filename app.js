const { MessengerClient } = require('messaging-api-messenger');

const userId = "410822326668626"

// get accessToken from facebook developers website
const client = new MessengerClient({
    accessToken: 'EAALPPluYZBg8BAO6wZCeb9ZAL830hnr5nYZAHgglUkBJnc6YeWvXdiLthj6gQbyeYOslvcPxDp2FZC4fgHgZABMI7rBjXpKH61eyYvuZA6FCUZAfYeOg1gMcFEWOGRMyeahqVGXqZAmjq0AZAs1iTyjSJUE2BboTxeUwZCo1tnd6ZCAECnBCxnfGjd8K',
    appId: "790816685095439",
    appSecret: "013fac914053354b9d6991520e34312d",
    version: '13.0',
});

client.sendText(userId, 'Hello World').then(() => {
    console.log('sent');
});
