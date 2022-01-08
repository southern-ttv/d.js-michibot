const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Get Michi's Latency and api Latency.",
    type: 'CHAT_INPUT',
    ownerOnly: false,
    botPerms: [''],
    userPerms: [''],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const pingEmbed = new MessageEmbed()
            .setTitle('Pong! 🏓')
            .setDescription(`${client.ws.ping}ms`)
        interaction.reply({ embeds: [pingEmbed] });
    },
};
