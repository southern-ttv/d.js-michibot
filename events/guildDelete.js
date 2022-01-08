const client = require("../index");
const { webhookId, webhookToken } = require('../config.json');
const { MessageEmbed, WebhookClient, Guild } = require('discord.js');

client.on("guildDelete", async (guild) => {

    const webhookClient = new WebhookClient({ id: webhookId, token: webhookToken });
    Guild.fetch

    const guildDelete = new MessageEmbed()
    .setTitle("Removed from server.")
    .setThumbnail(guild.iconURL({ dynamic: true }))
    .addField("Server Name:", `${guild.name}`)
    .addField("Owner ID:", `${guild.ownerId}`)
    .addField("Server ID:", `${guild.id}`)
    .addField("Member Count", `${guild.memberCount}`)
    .addField("Discord Partner:", `${guild.partnered}`)
    .addField("Discord Verified:", `${guild.verified}` )
    .setColor('#A8534B')
    .setTimestamp()
        .setFooter(`In ${client.guilds.cache.size} servers.`, client.user.displayAvatarURL())

    webhookClient.send({
	username: 'Michi Logs',
	avatarURL: 'https://cdn.discordapp.com/avatars/911410848134733914/41ace7212c322a5a7d9c8991d30add67.webp?size=128',
	embeds: [guildDelete],
    });

});
