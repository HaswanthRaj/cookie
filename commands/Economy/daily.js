const { balance } = require('../../structures/economy')
const { add } = require('../../structures/economy')
const Discord = require('discord.js')
module.exports={
    name: "work",
    category: "Economy",
    timeout:  86300000,
    run: async(client, message, args)=>{
        let am = parseInt(100)
        await add(message.author.id,  message.author.tag, am)
        let bal = await balance(message.author.id)
        const emb = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(message.author.displayAvatarURL({dynamic: true, format: "png"}))
        .setDescription(
          `You got your daily cookies **100 🍪**
    
          **Balance:** ${bal.money} $ 💵`
        )
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(emb);   
    }
}