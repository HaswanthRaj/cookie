const { balance } = require('../../structures/economy')
const { add } = require('../../structures/economy')
const Discord = require('discord.js')
module.exports={
    name: "shop",
    category: "Economy",
    timeout: 10000,
    run: async(client, message, args)=>{

        const emb = new Discord.MessageEmbed()
        emb.setColor("RED")
        emb.setTitle("Cookie Shop")
        emb.setAuthor('COOKIE')
        emb.addFields(
            { name: '\u200B', value: '\u200B' },
            { name: '**Xbox Game Pass**', value: '`Price:~~20000~~  10000 🍪 `',inline: false },
            { name: '**Green Color**', value: '`Price: 500 🍪 `',inline: false },
            {name: "**Violet Color**",  value: '`Price: 500 🍪`', inline:false }
        )
        message.channel.send(emb)
    }
}