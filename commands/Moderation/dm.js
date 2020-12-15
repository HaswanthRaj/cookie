const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "dm",
    category: "moderation",
    run: async (client, message, args) => {
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("You don't have enough permissions! :sad:")
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send("you didn't mentioned a user ");
        if (!args.slice(1).join(" ")) return message.channel.send("You did not specified your message");
        user.user.send(args.slice(1).join(" ")).catch(() => message.channel.send("That user could not be Dmed")).then(() => message.channel.send(`sent a messsage to ${user.user.tag}`))
        
    }
}