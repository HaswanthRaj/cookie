const { balance } = require('../../structures/economy')
const { add } = require('../../structures/economy')
const Discord = require('discord.js')
module.exports={
    name: "add",
    category: "Economy",
    run: async(client, message, args)=>{
        if (!message.member.hasPermission("ADMINISTRATOR") || !message.guild.owner) return message.channel.send("You don't have enough authority to do this.");
        if(!args[0]){
            message.channel.send('Mention a user to send money :)');
        }
            var user = message.mentions.users.first().id
            if(args[0] !== `<@!${user}>`) return message.reply('Type `\'add <mention> <cash>` to add cash to others')
        
        if(!args[1]){
          return message.reply('Type `\'add <mention> <cash>` to add cash to others')

        }
        await add(user, user.user.tag, args[1])
        message.channel.send(`successfully added ${args[1]} to <@${user}>`)
    }
}