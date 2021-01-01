const { balance } = require('../../structures/economy')
const { add } = require('../../structures/economy')
const { subtrex } = require('../../structures/economy')
const { subfish } = require('../../structures/economy')
const { subcc } = require('../../structures/economy')
const { subwildpig } = require('../../structures/economy')
const { subdeer } = require('../../structures/economy')
const { sub } = require('../../structures/economy')
const { userdata } = require('../../structures/economy')
const Discord = require('discord.js')

module.exports={
    name: "sell",
    aliases: ['sell'],
    category: "Economy",
    run: async(client, message, args)=>{
        if(!args[0]){
            message.channel.send('Mention a item to sell :)');
        }
        const k = args[0]
        let items = await userdata(message.author.id)
        switch(k){
            case "fish":
                {
               
                if(items.fish <= '0'){
                  message.channel.send('You don\'t have any fish to sell');
                  return;
                }
                let ma = parseInt(100)
                await add(message.author.id, message.author.tag, ma)
                await subfish(message.author.id, message.author.tag, 1)
                let bal = await balance(message.author.id)
          const emb = new Discord.MessageEmbed()
         .setColor("RANDOM")
         .setDescription(
           `***The Sun Market***
           ------------------------------------
           **Name:** ${message.author.username} 
           **Item:** ${k}
           **Amount:** ${ma} $ 💵
                     
           **Balance:** ${bal.money}`,
         )
         .setTimestamp();
       message.channel.send(emb);
         }
         break;
   
         case "trex":
                {
               
                if(items.trex <= '0'){
                  message.channel.send('You don\'t have any T-Rex to sell');
                  return;
                }
                let ma = parseInt(10000)
                await add(message.author.id, message.author.tag, ma)
                await subtrex(message.author.id, message.author.tag, 1)
                let m = await balance(message.author.id)
          const ji = new Discord.MessageEmbed()
         .setColor("RANDOM")
         .setDescription(
           `***The Sun Market***
           --------------------------------
           **Name:** ${message.author.username}
           **Item:** ${k}
           **Amount:** ${ma} $ 💵
                      
           **Balance:** ${m.money}`,
           message
         )
         .setTimestamp();
       message.channel.send(ji);
         }
         break;
   
         case "deer":
                {
               
                if(items.deer <= '0'){
                  message.channel.send(`You don\'t have any ${k}  to sell`);
                  return;
                }
                let ma = parseInt(1000)
                await add(message.author.id, message.author.tag, ma)
                await subdeer(message.author.id, message.author.tag, 1)
                let m = await balance(message.author.id)
          const ki = new Discord.MessageEmbed()
         .setColor("RANDOM")
         .setDescription(
           `***The Sun Market***
           --------------------------------
           **Name:** ${message.author.username}
           **Item:** ${k}
           **Amount:** ${ma} $ 💵
                      
           **Balance:** ${m.money}`,
           message
         )
         .setTimestamp();
       message.channel.send(ki);
         }
         break;
   
         case "wildpig":
           {
          
           if(items.wildpig <= '0'){
             message.channel.send(`You don\'t have any ${k}  to sell`);
             return;
           }
           let ma = parseInt(600)
           await add(message.author.id, message.author.tag, ma)
           await subwildpig(message.author.id, message.author.tag, 1)
           let m = await balance(message.author.id)
     const kp = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(
      `***The Sun Market***
      --------------------------------
      **Name:** ${message.author.username}
      **Item:** ${k}
      **Amount:** ${ma} $ 💵
                 
      **Balance:** ${m.money}`,
      message
    )
    .setTimestamp();
   message.channel.send(kp);
    }
    break;
   
         default:{
             message.channel.send('Type `!sell <itemname> items names : trex, fish, wildpig, deer`')
         }
         break;
}
}}