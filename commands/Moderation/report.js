const Discord = require('discord.js')


module.exports = {
    name: 'report',
    catgory: 'moderation',
    timout: 1000000,
    run: async (client, message, args) =>{
        message.delete({timeout: 3000});
        // reason
        let reason = args.slice(1).join(" ");
        if (!args.slice(1).join(" ")) return message.channel.send("You did not specified your message").then(m => m.delete({timeout: 15000}));
        
        // target user
        let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!target) return message.channel.send('Please provide a user that you wish to report').then(m => m.delete({timeout: 15000}));

        try{
              
        let chan2 = message.guild.channels.cache.get('780363047129579520')
        if(!chan2) return message.channel.send('channel not found')

        const em = new Discord.MessageEmbed()
        em.setTitle('Report Card')
        em.setColor('RANDOM')
        em.setAuthor(`${message.author.tag} reported ${target.user.tag}`)
        em.setDescription(`**Reason:** ${reason}`)
        em.setTimestamp()
        chan2.send(em)
        message.channel.send(`Your report is sucessfully sent to Admins to review`)
         }catch(e){
            return message.channel.send(`Failed to send the Report to the admins`)
        }
    }
}

