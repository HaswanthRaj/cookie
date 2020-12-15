const { canModifyQueue } = require("../../structures/music");
const {MessageEmbed} = require('discord.js')
module.exports = {
  name: "remove",
  aliases: ["rm"],
  description: "Remove song from the queue",
  usage: "kid remove <song number>",
  run: async (client, message, args) => {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("There is no queue.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!args.length) return message.reply(`Usage: ${message.client.prefix}remove <Queue Number>`);
    if (isNaN(args[0])) return message.reply(`Usage: ${message.client.prefix}remove <Queue Number>`);


    const song = queue.songs.splice(args[0] - 1, 1);
    
    const emb = new MessageEmbed()
    .setColor('RED')
    .setAuthor(message.guild.name)
    .setDescription(`${message.author} ❌ removed **${song[0].title}** from the queue successfully Enjoy :D`)
    queue.textChannel.send(emb);
  }
};
