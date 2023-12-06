const { devs, testServer } = require('../../../config.json');
const getLocalCommands = require('../../utils/getLocalCommands');

module.exports = async (client, interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const localCommands = getLocalCommands();

    try {
        const commandObject = localCommands.find((cmd) => cmd.name === interaction.commandName);

        if(!commandObject) return;

        if (commandObject.devOnly) {
            if (!devs.includes(interaction.member.id)) {
                interaction.reply({
                    content: 'Only developers are allowed to run this command',
                    ephemeral: true
                })
            }
        }

        if (commandObject.testOnly) {
            if (!testServer.includes(interaction.guild.id)) {
                interaction.reply({
                    content: 'Only developers are allowed to run this command',
                    ephemeral: true
                })
            }
        }

        if(commandObject.permissionsRequired?.length) {
            for (const permission of commandObject.permissionsRequired) {
                if (!interaction.member.permissions.has(permission)) {
                    interaction.reply({
                        content: 'Not enough permissions.',
                        ephemeral: true
                    })
                    return;
                }
            }
        }

        if(commandObject.botPermissions?.length) {
            for (const permission of commandObject.botPermissions) {
                const bot = interaction.guild.members.me;

                if (!bot.permissions.has(permission)) {
                    interaction.reply({
                        content: 'I dont have enough permissions.',
                        ephemeral: true
                    })
                    return;
                }
            }
        }

        await commandObject.callback(client, interaction);
    } catch (e) {
        console.log(`There was an error running this commad: ${e}`)
    }
}