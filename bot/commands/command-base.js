const prefix = ';';
const { EmbedBuilder } = require('discord.js')

module.exports = (client, comandOptions) => {
    let {
        commands, 
        description,
        expectedArea = '',
        minArgs = 0,
        maxArgs = null,
        expectedArgs = '', 
        callback
    } = comandOptions

    if (typeof commands === 'string') {
        commands = [commands]
    }

    client.on('messageCreate', async msg => {
        if (msg.author.bot) return; //return if the author is a bot
        if (!msg.content.startsWith(prefix)) return; //return if the command doesn't start with the prefix

        const botName = 'Scarlet RPG';

        const embed = new EmbedBuilder()
            .setColor(msg.guild.me.displayHexColor)
            .setAuthor({ name: botName, iconURL:`${msg.author.avatarURL()}` });

        const { content } = msg;

        const target = msg.mentions.users.first() || msg.author; //makes the target being the first person tagged or the msg author in case ther is no tag
        const userId = msg.author.id;

        /*Get all the possible alias of the commands in case they use that instead of the real command*/
        for (const aliases of commands) {
            const arguments = content.split(/[ ]+/);
            const alias = aliases.split(/[ ]+/); 

            if (arguments[0].toLowerCase() == `${prefix}${alias[0].toLowerCase()}`) {
                const channel = client.channels.cache.get(msg.channel.id);
                let webhooks = await channel.fetchWebhooks();
                let webhook = webhooks.first();

                if (webhook === undefined) {
                    await msg.channel.createWebhook('NPC');
                    webhooks = await channel.fetchWebhooks();
                    webhook = webhooks.first();
                }

                arguments.shift();

                if (arguments.length < minArgs || (
                    maxArgs !== null && arguments.length > maxArgs
                )) {
                    msg.reply(`Incorret syntax! Use ${prefix}${alias} ${expectedArgs}`);
                }

                callback(msg, embed, target, userId, arguments, alias, webhook, client, prefix);

                return
            }
        }
    })
}