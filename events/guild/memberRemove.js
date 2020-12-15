// this is where you add your stuff for when a user leavesconst { MessageEmbed } = require("discord.js");
module.exports = async member => {

    // this is finding the channel goodbye
    const channel = member.guild.channels.cache.find(ch => ch.name === 'bye👋');
    if (!channel) return;
    channel.send(`Goodbye, **${member.user.tag}** just left the server now!, you missed the COOKIE `)

    // this is sending a message
};