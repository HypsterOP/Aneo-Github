const db = require('../../reconDB');

module.exports = {
    name: 'antiswear-off',
    run : async(client, message, args) => {
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
        if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send('I do not have permission to delete messages.')

        if(await db.has(`swear-${message.guild.id}`) === true) {
            await db.delete(`swear-${message.guild.id}`)
            message.channel.send('AntiSwear has been turned off!')

        }else return message.channel.send('AntiSwear has already been turned off!')
    }
}