const { balance } = require('../../structures/economy')
const { addvouch } = require('../../structures/economy')
const Discord = require('discord.js')
module.exports={
    name: "vouch",
    category: "Economy",
    run: async(client, message, args)=>{
        if(!message.channel == "800379396808376340") return
        if(!args[0]){
            message.channel.send('Mention a user to send vouch :)');
        }
            var user = message.mentions.users.first().id 
            if(!user) return message.member.send('Type`\' vouch <mention>` to add cash to others')
        await addvouch(user)
        message.react("✅")
    }//ok
}//add