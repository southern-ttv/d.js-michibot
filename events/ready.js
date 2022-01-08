const client = require("../index");
const { webhookId, webhookToken } = require('../config.json');
const { MessageEmbed, WebhookClient } = require('discord.js');
const datenow = Date.now();
const timestp = Math.floor(datenow / 1000)


client.on('ready', async () => {

    const webhookClient = new WebhookClient({ id: webhookId, token: webhookToken });

    const embed = new MessageEmbed()
	.setDescription(`MichiBot started up at <t:${timestp}:F>`)
	.setColor('#DCE6A7');

    webhookClient.send({
	username: 'Michi Logs',
	avatarURL: 'https://cdn.discordapp.com/avatars/911410848134733914/41ace7212c322a5a7d9c8991d30add67.webp?size=128',
	embeds: [embed],
});

	const activities = [
		{ name: `in ${client.guilds.cache.size} servers`, type: 'PLAYING' }, 
		{ name: '/help', type: 'WATCHING' },
		{ name: `${client.users.cache.size} users`, type: 'LISTENING'}
	  ];
	

	  client.user.setPresence({ status: 'online', type: 'WATCHING', name: "whatever;'" });
	  console.log(`	
	  
	  ███╗░░░███╗██╗░█████╗░██╗░░██╗██╗██████╗░░█████╗░████████╗
	  ████╗░████║██║██╔══██╗██║░░██║██║██╔══██╗██╔══██╗╚══██╔══╝
	  ██╔████╔██║██║██║░░╚═╝███████║██║██████╦╝██║░░██║░░░██║░░░
	  ██║╚██╔╝██║██║██║░░██╗██╔══██║██║██╔══██╗██║░░██║░░░██║░░░
	  ██║░╚═╝░██║██║╚█████╔╝██║░░██║██║██████╦╝╚█████╔╝░░░██║░░░
	  ╚═╝░░░░░╚═╝╚═╝░╚════╝░╚═╝░░╚═╝╚═╝╚═════╝░░╚════╝░░░░╚═╝░░░`)
      console.log(``)

});