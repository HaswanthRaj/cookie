const Discord = require('discord.js')
module.exports ={
    name: "vote",
    category: "bot",
    run: async (client, message, args)=>{
        const embe = new Discord.MessageEmbed();
        embe.setTitle('Upvote for me in this website please')
        embe.setURL('https://discordbotlist.com/bots/loney/upvote');
        embe.addField("Vote for cookie", "[Vote for Cookie in top.gg](https://top.gg/servers/745535441473896469)")
        embe.addField("discordbotlist.com", "[Vote for Loney discordbotlist.com ](https://discordbotlist.com/bots/loney/upvote)")
        embe.addField("Top.gg", "[Vote for Loney in Top.gg ](https://top.gg/bot/748778813357555733/vote)")
        embe.addField("Loney Website", "[Check Loney Website for help and support](https://www.loney.epizy.com/)")
        embe.setColor('RANDOM');
        embe.setTimestamp();
        return message.channel.send(embe);
    }
}