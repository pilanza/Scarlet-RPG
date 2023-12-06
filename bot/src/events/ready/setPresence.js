const { ActivityType } = require('discord.js');

module.exports = (client) => {
    client.user.setPresence({
        activities: [{ name: `/help`, type: ActivityType.Listening }],
    });
}