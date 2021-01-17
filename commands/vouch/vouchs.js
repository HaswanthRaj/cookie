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
        let msg
        if(voch < 10){
             msg = `**This  user not Trusted Yet vouchs: ${data.vouch}**`
        }
        if(voch >= 10){
            msg=`**This user Trusted vouchs: ${data.vouch}**`
        }
        if(voch > 20){
            msg=`**This user Trusted vouchs: ${data.vouch}**`
        }
    }//ok
}//add