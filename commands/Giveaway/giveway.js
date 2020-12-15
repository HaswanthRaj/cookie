
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
            messages: {
                giveaway: "\n🎉🎉 **GIVEAWAY** 🎉🎉",
                giveawayEnded: "\n🎉🎉 **GIVEAWAY ENDED** 🎉🎉",
                timeRemaining: "Time remaining: **{duration}**!",
                inviteToParticipate: "React with 🎉 to participate!",
                winMessage: "Congratulations, {winners}! You won **{prize}**!",
                embedFooter: "Giveaways",
                noWinner: "Giveaway cancelled, no valid participations.",
                hostedBy: "Hosted by: {user}",
                winners: "winner(s)",
                endedAt: "Ended at",
                units: {
                    seconds: "seconds",
                    minutes: "minutes",
                    hours: "hours",
                    days: "days",
                    pluralS: false // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2
                }
            }
        });
        if (message.deletable) message.delete();
        // And the giveaway has started!
    }
}