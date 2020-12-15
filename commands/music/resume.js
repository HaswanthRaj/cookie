const Discord = require('discord.js');
module.exports = {
  name:"resume",
  category: "music",
  description: "resume the paused song",
  usage: "kid resume",
  run: async (client, message, args) => {
  const serverQueue = message.client.queue.get(message.guild.id);
  if (serverQueue && !serverQueue.playing) {
    serverQueue.playing = true;
    serverQueue.connection.dispatcher.resume();
    const re = new Discord.MessageEmbed();
    re.setColor('RANDOM');
    re.setDescription('▶ Resumed the music !')
    return message.channel.send(re);
  }
  return message.channel.send("There is nothing playing.");
}};