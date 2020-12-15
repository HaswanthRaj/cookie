const { RequestError } = require("got/dist/source");

const Discord = require('discord.js')

module.exports = {
    name: "uptime",
    aliases: ["up"],
    category: "bot",
    run: async (client, message, args) =>{

        
    var milliseconds = parseInt((client.uptime % 1000) / 100),
    seconds = parseInt((client.uptime / 1000) % 60),
    minutes = parseInt((client.uptime / (1000 * 60)) % 60),
    hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);

hours = (hours < 10) ? "0" + hours : hours;
minutes = (minutes < 10) ? "0" + minutes : minutes;
seconds = (seconds < 10) ? "0" + seconds : seconds;
const up = new Discord.MessageEmbed()
.setTitle('COOKIE\'s Uptime')
.setColor('RANDOM')
.setDescription(`**${hours}** Hours **${minutes}** Minutes **${seconds}.${milliseconds}** Second `)
.setTimestamp()
  message.channel.send(up);
    }
}