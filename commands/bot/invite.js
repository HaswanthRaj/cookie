const Discord = require('discord.js')
module.exports = {
    name: "invite",
    category : "bot",
run: async (client, message, args)=>{
    const emb = new Discord.MessageEmbed();
    emb.setTitle('Hello you can\'t invite me but invite my dev\'s same looking bot loney');
    emb.setURL('https://discord.com/oauth2/authorize?client_id=748778813357555733&scope=bot&permissions=8')
    emb.setColor('RANDOM');
    emb.setTimestamp();
    return message.channel.send(emb);

}
}