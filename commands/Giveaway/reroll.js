const Discord = require('discord.js')
const ms = require('ms')


module.exports={
    name: "reroll",
    description: "this command is used to re roll the giveaway",
    usage: "\' reroll <Giveaway message ID>",
    category: "Giveaway",

    run: async(client, message, args)=>{

        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You don\'t have **Manage channels** permission to use this command')
        
        
        if(!args[0]){
            return message.channel.send(`**Please provide the giveaway message id to reroll it** ${message.author.username}`)
        }
        let messageID = args[0];
        client.giveawaysManager.reroll(messageID).then(() => {
            message.channel.send("Success! Giveaway rerolled!");
        }).catch((err) => {
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
    }
}