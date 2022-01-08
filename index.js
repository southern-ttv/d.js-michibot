const { Client, Collection, MessageEmbed } = require("discord.js");
const logger = require('./utils/logger.js');

const client = new Client({
    intents: [
        32767, // In the developer portal, make sure you have all privileged intents enabled
    ] }) // Remove this if you do not want the status to be online mobile 
module.exports = client;

console.clear()

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

client.login(client.config.token);

process.on('unhandledRejection', err => {logger.error(err); console.log(err);});