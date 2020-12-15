const { DiscordAPIError } = require("discord.js");

const Discord = require("discord.js");
module.exports = {
  name: "volume",
  category: "music",
  description: "used to increase the sound of currently playing song's volume",
  usage: "kid volume <0-10> ",
  run: async(client, message, args) => {
  const { channel } = message.member.voice;
  if (!channel)
    return message.channel.send(
      "I'm sorry but you need to be in a voice channel to play music!"
    );
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue) return message.channel.send("There is nothing playing.");
  if (args[0] > 100 ) return message.channel.send("You can Only set volume between `10-100`")
  if (!args[0])
    return message.channel.send(
      `The current volume is: **${serverQueue.volume}**`
    );
  serverQueue.volume = args[0]; 
  serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
  const emb = new Discord.MessageEmbed();
  emb.setDescription(`I have set the volume of the Song to:  **${args[0]}**`)
  emb.setColor('RANDOM')
  return message.channel.send(emb);
}};
