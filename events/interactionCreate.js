const client = require("../index");
const { Discord, MessageEmbed, Permissions } = require("discord.js")
const owners = require("../config.json");


client.on("interactionCreate", async (interaction) => {
    if (interaction.isCommand()) {

        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd)
            return interaction.reply({ content: "An error has occured " });

            if (cmd.ownerOnly) {
                if (!client.config.developers.includes(interaction.user.id)) {
                let ownerOnly = new MessageEmbed()
                        .setDescription("This command is limited to the bot developers!" )
                return interaction.reply({embeds : [ownerOnly], ephemeral: true})
                    }}
                
                    if (cmd.userPerms) {
                        if (!client.guilds.cache.get(interaction.guild.id).members.cache.get(interaction.member.id).permissions.has(cmd.userPerms || [])) {
                            if (cmd.noUserPermsMessage) {
                                return interaction.reply(cmd.noUserPermsMessage)
                            } else if (!cmd.noUserPermsMessage) {
                                return interaction.reply({content: `You need the \`${cmd.userPerms}\` permission(s) to use this command!`, ephemeral: true,})
                            }
                        }
                    }
            
                    if (cmd.botPerms) {
                        if (!client.guilds.cache.get(interaction.guild.id).members.cache.get(client.user.id).permissions.has(cmd.botPerms || ['SEND_MESSAGES', 'EMBED_LINKS'])) {
                            if (cmd.noBotPermsMessage) {
                                return interaction.reply(cmd.noBotPermsMessage)
                            } else if (!cmd.noBotPermsMessage) {
                                return interaction.reply({content: `I need the \`${cmd.botPerms}\` permission(s) to execute this command!`, ephemeral: true})
                            }
                        }
                    } 
            
        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
        interaction.member = interaction.guild.members.cache.get(interaction.user.id);
        cmd.run(client, interaction, args);
    }

    if (interaction.isContextMenu()) {
        const command = client.slashCommands.get(interaction.commandName);
        if (command) command.run(client, interaction);
    }
});
