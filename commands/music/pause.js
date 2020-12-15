const Discord = require('discord.js');
module.exports={
  name: "pause",
  category: "music",
  description: "used to pause the current song",
  usage: "kid pause",
  run: async(client, message, args) => {
  const serverQueue = message.client.queue.get(message.guild.id);
  if (serverQueue && serverQueue.playing) {
    serverQueue.playing = false;
    serverQueue.connection.dispatcher.pause();
    const p = new Discord.MessageEmbed();
    p.setColor('RANDOM')
    p.setDescription('⏸ Paused the music !')
    return message.channel.send(p);
  }
  return message.channel.send("There is nothing playing.");
}};
