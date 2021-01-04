const { balance } = require('../../structures/economy')
const { add } = require('../../structures/economy')
const Discord = require('discord.js')
module.exports={
    name: "add",
    category: "Economy",
    run: async(client, message, args)=>{
        if(!message.member.hasPermissions('ADMINISTRATOR')){
            return message.channel.send('You can\'t use this command')
        }
        if(!args[0]){
            message.channel.send('Mention a user to send money :)');
        }
            var user = message.mentions.users.first().id
            if(args[0] !== `<@!${user}>`) return message.reply('Type `\'add <mention> <cash>` to add cash to others')
        
        if(!args[1]){
          return message.reply('Type `\'add <mention> <cash>` to add cash to others')

        }
        await add(user, message.author.tag, args[1])
        message.channel.send(`successfully added ${args[1]} to <@${user}>`)
    }
}