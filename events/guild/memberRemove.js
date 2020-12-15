// this is where you add your stuff for when a user leavesconst { MessageEmbed } = require("discord.js");
module.exports = async member => {

    // this is finding the channel goodbye
    const { guild } = member
    // Access the actual channel and send the message
    const channel = guild.channels.cache.get('745571302496272415')
    if (!channel) return;
    channel.send(`Goodbye, **${member.user.tag}** just left the server now!, you missed the COOKIE `)

    // this is sending a message
};