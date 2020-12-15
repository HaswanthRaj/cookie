const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "say",
    category: "moderation",
    run: async (client, message, args) => {
        message.delete();
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    let botmessage = args.join(" ");
    message.channel.send(botmessage);
        
    }
}