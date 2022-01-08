const client = require("../index");

client.on("messageCreate", async (message) => {
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(client.config.prefix)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(/ +/g);

    const command = client.commands.get(command.toLowerCase()) || client.commands.find(c => c.aliases?.includes(command.toLowerCase()));
    
    if (command.ownerOnly) {
        if (!client.config.developers.includes(interaction.user.id)) {
        let ownerOnly = new MessageEmbed()
                .setDescription("This command is limited to the bot developers!" )
        return interaction.reply({embeds : [ownerOnly], ephemeral: true})
            }}
        
            if (command.userPerms) {
                if (!client.guilds.cache.get(interaction.guild.id).members.cache.get(interaction.member.id).permissions.has(command.userPerms || [])) {
                    if (command.noUserPermsMessage) {
                        return interaction.reply(command.noUserPermsMessage)
                    } else if (!command.noUserPermsMessage) {
                        return interaction.reply({content: `You need the \`${command.userPerms}\` permission(s) to use this command!`, ephemeral: true,})
                    }
                }
            }
    
            if (command.botPerms) {
                if (!client.guilds.cache.get(interaction.guild.id).members.cache.get(client.user.id).permissions.has(command.botPerms || ['SEND_MESSAGES', 'EMBED_LINKS'])) {
                    if (command.noBotPermsMessage) {
                        return interaction.reply(command.noBotPermsMessage)
                    } else if (!command.noBotPermsMessage) {
                        return interaction.reply({content: `I need the \`${command.botPerms}\` permission(s) to execute this command!`, ephemeral: true})
                    }
                }
            } 
    

    if (!command) return;
    await command.run(client, message, args);
});
