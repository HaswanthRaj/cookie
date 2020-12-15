const Discord = require('discord.js')
module.exports = {
    name: "ban",
    category: "moderation",
    description: "bans the member",
    usage: "<id | mention>",
    run: async (client, message, args) => {
        const red = new Discord.MessageEmbed()
        red.setColor('RED')

        
        if (message.deletable) message.delete();
        if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) {
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
        if (!user.bannable){
            red.setDescription(`**You can't ban a Mod/ Admin**`)
            return message.channel.send(red);
        }
        if (user.id === message.author.id){
            red.setDescription(`**You can't ban yourself**`)
            return message.channel.send(red); 
        } 
        if (user.id === client.user.id) {
            red.setDescription(`**You can't ban me**`)
            return message.channel.send(red);
        }
        
        if (!reason) reason = "No reason provided";
        member.ban(reason).then(() => {
            const green = new Discord.MessageEmbed()
            green.setColor('GREEN')
            green.setDescription(`**Successfully banned **${user.tag}** <:ag_tickop:781410518442180641>`)
          message.channel.send(green);
        }).catch(err => {
            red.setDescription(`**I was unable to ban the member ${user.tag}**`)
          message.channel.send(red)
        })
            
    }
}