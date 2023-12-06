const { Client, GatewayIntentBits, Collection } = require('discord.js');
const eventHandler = require('./src/handlers/eventHandler');

/*dotenv*/
const dotenv = require('dotenv');
dotenv.config();
const { TOKEN } = process.env

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildPresences
    ],
});

client.commands = new Collection();

eventHandler(client);

client.login(TOKEN)