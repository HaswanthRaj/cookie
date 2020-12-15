
const ms = require('ms')


module.exports={
    name: "giveaway",
    description: "create giveaway in the server",
    usage: "\' giveaway <time> <winner count> <prize>",
    category: "Giveaway",

    run: async(client, message, args)=>{
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You don\'t have **Manage channels** permission to use this command')
        if(!args[0]){
            return message.channel.send(`Please enter the give correctly \' giveaway <time>  <winners count> <prize name>`)
        }

        if(!args.slice(2).join(" ")){
            return message.channel.send(`Please enter the give correctly \' giveaway <time>  <winners count> <prize name>`)
        }
        if(!args[1]){
            return message.channel.send(`Please enter the give correctly \' giveaway <time> <winners count> <prize name> `)
        }

        client.giveawaysManager.start(message.channel, {
            time: ms(args[0]),
            prize: args.slice(2).join(" "),
            winnerCount: parseInt(args[1]),
            HostedBy: message.author
        })
        if (message.deletable) message.delete();
        // And the giveaway has started!
    }
}