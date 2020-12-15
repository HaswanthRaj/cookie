const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "restart",
    category: "owner",
    run: async (client, message, args) => {
        const emb = new MessageEmbed();
emb.setColor('RANDOM')
emb.setDescription('I am Restarting..... :thumbsup:')
  if (message.author.id !== '742378231126032497'|| message.author ===  message.guild.owner) {
    return message.channel.send(`You cannot use this command!, only my creator can use this!!`)
}
await message.channel.send(emb)
process.exit();
    }
    }