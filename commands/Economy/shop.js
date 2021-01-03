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
        emb.setDescription('You can buy Items from cookie shop by \' buy <item number>')
        emb.addFields(
            { name: '\u200B', value: '\u200B' },
            { name: '**1. Xbox Game Pass**', value: 'Price:~~20000~~ ` 10000 🍪 `',inline: false },
            //{ name: '**2. Violet Color**', value: 'Price: `500 🍪 `',inline: false },
            //{ name: "**3. Green Color **",  value: 'Price: `500 🍪`', inline:false }
        )
        emb.setFooter('You can buy Cool itmes in this cookie shop ')
        emb.setTimestamp()
        message.channel.send(emb)
    }
}