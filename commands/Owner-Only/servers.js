const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'guilds',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(message.author.id !== 'YOUR_ID') return;
        message.channel.send(`Hello YOUR_NAME, Im in ${client.guilds.cache.size} servers`)
    },
};