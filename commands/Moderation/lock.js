
module.exports = {
    name: "lock",
    category: "moderation",
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Sorry, you lack permissions to use this command. ¯\\_(ツ)_/¯");
                
        if (args[0] === 'on') {
                message.channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false
                }).then(() => {
                    message.channel.setName(message.channel.name += `🔒`)
                })

            return message.channel.send('Locked this channel channels 🔒');
        } else if (args[0] === 'off') {
                message.channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: true
                }).then(() => {
                    message.channel.setName(message.channel.name.replace('🔒', ''))
                    }
                )
            return message.channel.send('Unlocked this channel channels 🔓')
        }
    }
}