const client = require("../index");
const { webhookId, webhookToken } = require('../config.json');
const { MessageEmbed, WebhookClient, Guild } = require('discord.js');
const logger = require('../utils/logger.js');


client.on("guildCreate", async (guild) => {

      // Create mute role
  let muteRole = guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');
  if (!muteRole) {
    try {
      muteRole = await guild.roles.create({
          name: 'Muted',
          permissions: []
      });
    } catch (err) { logger.error(err.message); }

    for (const channel of guild.channels.cache.values()) {
      try {
        if (channel.viewable && channel.permissionsFor(guild.me).has('MANAGE_ROLES')) {
          if (channel.type === 'GUILD_TEXT') // Deny permissions in text channels
            await channel.permissionOverwrites.edit(muteRole, {
              'SEND_MESSAGES': false,
              'ADD_REACTIONS': false
            });
          else if (channel.type === 'GUILD_VOICE' && channel.editable) // Deny permissions in voice channels
            await channel.permissionOverwrites.edit(muteRole, {
              'SPEAK': false,
              'STREAM': false
            });
        } 
      } catch (err) { logger.error(err.stack) }
    }
  }

    const webhookClient = new WebhookClient({ id: webhookId, token: webhookToken });

    Guild.fetch
    const guildJoin = new MessageEmbed()
    .setTitle("New server!")
    .setThumbnail(guild.iconURL({ dynamic: true }))
    .addField("Server Name:", `${guild.name}`)
    .addField("Owner ID:", `${guild.ownerId}`)
    .addField("Server ID:", `${guild.id}`)
    .addField("50+ Members")
    .addField("Member Count", `${guild.memberCount}`)
    .addField("Maximum Members",`${guild.maximumMembers}`)
    .addField("Discord Partner:", `${guild.partnered}`)
    .addField("Discord Verified:", `${guild.verified}` )
    .addField("Boost Count:", `${guild.premiumSubscriptionCount}`)
    .setColor('#38A793')
    .setTimestamp()
        .setFooter(`In ${client.guilds.cache.size} servers.`, client.user.displayAvatarURL())         

    webhookClient.send({
	username: 'Michi Logs',
	avatarURL: 'https://cdn.discordapp.com/avatars/911410848134733914/41ace7212c322a5a7d9c8991d30add67.webp?size=128',
	embeds: [guildJoin],
    });

});
