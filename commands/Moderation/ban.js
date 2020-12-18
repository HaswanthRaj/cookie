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
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let reason = args.slice(2).join(" ");
        
        if (!member) {
            red.setDescription(`**Please mention the user ${message.author.username}**`)
            return message.channel.send(red);
        }
        if (member.id === message.author.id){
            red.setDescription(`**You can't ban yourself**`)
            return message.channel.send(red); 
        } 
        if (member.id === client.user.id) {
            red.setDescription(`**You can't ban me**`)
            return message.channel.send(red);
        }
        
        if (!reason) reason = "No reason provided";
        if (!args[0]) {
            return message.channel.send(`Please mention a user!`)
        }
       

        try {
            await member.ban()
            await message.channel.send(`${member} has been banned!`)
        } catch (e) {
            return message.channel.send(`**I can't ban this user maybe he is admin/mod**`)
        }
            
    }
}