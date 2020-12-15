const Discord = require('discord.js')
const ms = require('ms')


module.exports={
    name: "editgiveaway",
    aliases: ["edit-giveaway"],
    category: "Giveaway",
    run: async(client, message, args)=>{
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You don\'t have **Manage channels** permission to use this command')
        if(!args[0]){
            return message.channel.send(`Please enter the give correctly \' editgiveaway <giveaway message id> <time> <winners count> <prize name> `)
        }

        if(!args.slice(2).join(" ")){
            return message.channel.send(`Please enter the give correctly \' editgiveaway <giveaway message id> <time> <winners count> <prize name> `)
        }
        if(!args[1]){
            return message.channel.send(`Please enter the give correctly \' editgiveaway <giveaway message id> <time> <winners count> <prize name> `)
        }
        let messageID = args[0];
        client.giveawaysManager.edit(messageID, {
            newWinnerCount: parseInt(args[1]),
            newPrize: args.slice(3).join(" "),
            addTime: ms(args[2])
        }).then(() => {
            message.channel.send("Success! Giveaway will updated in less than "+(manager.updateCountdownEvery/1000)+" seconds.");
            if (message.deletable) message.delete();
        }).catch((err) => {
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
        // And the giveaway has started!
    }
}