const { balance } = require('../../structures/economy')
const Discord = require('discord.js')

module.exports={
    name: "bal",
    aliases: ["balance"],
    category: "Economy",
    run: async(client, message, args)=>{
      let bal
        bal = await balance(message.author.id)
       
        const emb = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(
          `------------------------------------------------
          **Name:** ${message.author.username}

          **Wallet:** ${bal.money} 🍪`
        )
        .setTimestamp()
        .setFooter(message.author.tag)
      message.channel.send(emb);
    }
}