const { balance } = require('../../structures/economy')
const { vouch } = require('../../structures/economy')
const Discord = require('discord.js')
module.exports={
    name: "vouches",
    category: "Economy",
    run: async(client, message, args)=>{
        if(!args[0]){
            message.channel.send('Mention a user to send vouch :)');
        }
            var user = message.mentions.users.first().id 
            if(!user) return message.member.send('Type`\' vouch <mention>` to add cash to others')
        let data = await vouch(user, message)

        let voch = data.vouch
        let opt
        if(voch < 1){
             opt = "1"
        }
        if(voch >= 10){
            opt = "2"
        }
        if(voch > 20){
          
            opt= "3"
        }
        if(voch >= 30){
            opt = "4"
        }

        switch(opt){
            case "1":{
                const emb = new Discord.MessageEmbed()
                .setColor('FF0000')
                .setTitle('Vouches')
                .setDescription(`**This  user not Trusted Yet vouchs: ${voch}**`)
                message.channel.send(emb)
            }
            break;
            case "2":{
                const emb = new Discord.MessageEmbed()
                .setColor('E38A00')
                .setTitle('Vouches')
                .setDescription(`**This  user Trust worthy vouchs: ${voch}**`)
                message.channel.send(emb)
            }
            break;
            case "3":{
                const emb = new Discord.MessageEmbed()
                .setColor('68FC01')
                .setTitle('Vouches')
                .setDescription(`**This  user Trusted vouchs: ${voch}**`)
                message.channel.send(emb)
            }
            break;
            case "4":{
                const emb = new Discord.MessageEmbed()
                .setColor('01FC09')
                .setTitle('Vouches')
                .setDescription(`**This  user Super Trusted vouchs: ${voch}**`)
                message.channel.send(emb)
            }
            break;
            default:{
                return
            }

        }
    }//ok
}//add