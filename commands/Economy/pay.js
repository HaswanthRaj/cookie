const { balance } = require('../../structures/economy')
const { add } = require('../../structures/economy')
const { sub } = require('../../structures/economy')
const Discord = require('discord.js')

module.exports={
    name: "pay",
    aliases: ['give'],
    category: "Economy",
    run: async(client, message, args)=>{
        if(!args[0]){
            message.channel.send('Mention a user to send money :)');
        }
            var user = message.mentions.users.first().id;
            if(args[0] !== `<@!${user}>`) return message.reply('Type `!pay <mention> <cash>` to send cash to others')
        
        if(!args[1]){
          return message.reply('Type `!pay <mention> <cash>` to send cash to others')
        }
        const coins = parseInt(args[1])
        const va = await balance(message.author.id)
        const v = va.money;
        if(coins > va.money){
          const emb = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setAuthor(message.author.tag)
          .setDescription(`You Only have ${v}$ Sad life 😔`)
          .setTimestamp()
          message.channel.send(emb)
        } else {
           await add(user, user.username, coins, 'wallet')
           await sub(message.author.id, coins)
           const send = new Discord.MessageEmbed()
           .setColor('RANDOM')
           .setDescription(
             ` 
             *You have Sent **${coins}$** to ${`<@${user}>*`}
             --------------------------------------------
              **Account Details**              
              **Name**: ${message.author.username}
             **Wallet**: ${va.money-coins} $
             --------------------------------------------`
             )
           .setTimestamp();
           message.channel.send(send);
    }
}
}