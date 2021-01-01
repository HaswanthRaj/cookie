const { balance } = require('../../structures/economy')
const { add } = require('../../structures/economy')
const Discord = require('discord.js')
module.exports={
    name: "work",
    category: "Economy",
    timeout: 1800000,
    run: async(client, message, args)=>{

        const jobs = ["Programmer", "Youtuber", "Admin", "Driver", "Bus Driver", "Manager", "Teacher"];
        const job = jobs[Math.floor(Math.random() * jobs.length)];
        let coins = Math.floor(Math.random() * 100);
        let am = parseInt(coins)
        await add(message.author.id,  message.author.username, am)
        let bal = await balance(message.author.id)
        const emb = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(message.author.displayAvatarURL({dynamic: true, format: "png"}))
        .setDescription(
          `---------------------------------------------
          You worked as a ***${job}*** and got ${coins} $ 💵 coins
          
          **Name:** ***${message.author.username}***
          **Work:** ***${job}***
          **Wage:** ***${coins}*** $ 💵
          ---------------------------------------------
          💰 **Account**
    
          **Balance:** ${bal.money} $ 💵`
        )
        .setTimestamp()
        .setFooter(message.author.tag)
        message.channel.send(emb);   
    }
}