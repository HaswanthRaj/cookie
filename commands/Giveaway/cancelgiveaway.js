const Discord = require('discord.js')
const ms = require('ms')



module.exports={
    name: "cancel-giveaway",
    aliases: ["cancelgiveaway", "deletegiveaway"],
    description: "this command is used to re delete the giveaway",
    usage: "\' cancel-giveaway <giveaway messageID>",
    category: "Giveaway",

    run: async(client, message, args)=>{
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You don\'t have **Manage channels** permission to use this command')
        let messageID = args[0];
        if(!args[0]){
            return message.channel.send(`**Please provide the giveaway message id to delete it** ${message.author.username}`)
        }
        client.giveawaysManager.delete(messageID).then(() => {
            message.channel.send("Success! Giveaway deleted!");
            if (message.deletable) message.delete();
        }).catch((err) => {
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
    }
}