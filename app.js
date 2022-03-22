const { MessengerClient } = require('messaging-api-messenger');

const userId = "410822326668626"

// get accessToken from facebook developers website
const client = new MessengerClient({
    accessToken: 'EAALPPluYZBg8BANqZBqPZBqDZAVE9vDS2lLgLvoCPWjZCJe4XRyp36C7x7HRfmxf9M1y6ZCdFH1G9pr10FEOzcWWGTZCDIorBgkZApbNZAVpmNC8P1PXabYz2NtjeifS0ZCoR1Pwc53UwZArv5Q1WdVs2XzMs7vatl020YOIsjqDJZBWNiMbACfOr9Sn',
    appId: "790816685095439",
    appSecret: "013fac914053354b9d6991520e34312d",
    version: '13.0',
});

client.sendText(userId, 'Hello World').then(() => {
    console.log('sent');
});
