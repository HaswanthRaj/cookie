const Discord = require('discord.js')
module.exports = {
    name: "kick",
    category: "moderation",
    description: "kicks the member",
    usage: "<mention>",
    run: async (client, message, args) => {
        const red = new Discord.MessageEmbed()
        red.setColor('RED')

        if (!message.member.hasPermission("KICK_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) {
            red.setDescription(`**You don't have a permissions to do this. ${message.author.username}**`)
            return message.channel.send(red);
        }
        let user = message.mentions.users.first();
        
        let member = message.guild.member(user);
        let reason = args.slice(22).join(" ");
        
        if (!user) {
            red.setDescription(`**Please mention the user ${message.author.username}**`)
            return message.channel.send(red);
        }
        
        if (user.id === message.author.id){
            red.setDescription(`**You can't kick yourself**`)
            return message.channel.send(red); 
        } 
        if (user.id === client.user.id) {
            red.setDescription(`**You can't kick me**`)
            return message.channel.send(red);
        }
        
        if (!reason) reason = "No reason provided";
        member.kick(reason).then(() => {
            const green = new Discord.MessageEmbed()
            green.setColor('GREEN')
            green.setDescription(`**Successfully kicked **${user.tag}**`)
          message.channel.send(green);
        }).catch(err => {
            red.setDescription(`**I was unable to kick the member ${user.tag} Maybe he is admin/mod**`)
          message.channel.send(red)
        })
            
    }
}