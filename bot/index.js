const path = require('path');
const fs = require('fs');

const { Client, GatewayIntentBits } = require('discord.js');

/*dotenv*/
const dotenv = require('dotenv');
dotenv.config();
const { TOKEN } = process.env

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildPresences
    ],
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity(";help", { type:"LISTENING" });

    const baseFile = 'command-base.js'
    const commandBase = require(`./commands/${baseFile}`);

    const readCommands = dir => {
        const files = fs.readdirSync(path.join(__dirname, dir));

        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file));

            if (stat.isDirectory()) {
                readCommands(path.join(dir, file));
            } else if (file !== baseFile) {
                const option = require(path.join(__dirname, dir, file));

                commandBase(client, option);
            }
        }
    }

    readCommands('commands');
})

client.login(TOKEN)