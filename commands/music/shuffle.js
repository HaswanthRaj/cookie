const { canModifyQueue } = require("../../structures/music");
const Discord = require('discord.js')

module.exports = {
  name: "shuffle",
  description: "Shuffle queue",
  run: async (client, message, args)=> {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("There is no queue.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    let songs = queue.songs;
    for (let i = songs.length - 1; i > 1; i--) {
      let j = 1 + Math.floor(Math.random() * i);
      [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    queue.songs = songs;
    message.client.queue.set(message.guild.id, queue);
    const emb = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setDescription(`${message.author} 🔀 shuffled the queue`)
    queue.textChannel.send(emb).catch(console.error);
  }
};
