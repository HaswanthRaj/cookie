const { balance, sub,  add } = require('../../structures/economy')
const Discord = require('discord.js')
module.exports={
    name: "buy",
    category: "Economy",
    timeout: 10000,
    run: async(client, message, args)=>{
        let orderid = 0
        let orderchannel = message.guild.channels.cache.get('794584411764949002')

        item = args[0]
        if(!item){
            return message.channel.send(`Please enter number of the item  you want to buy ex: 'buy <item number>`)
        }

        switch(item){
            case "1":
                {
                    let data = await balance(message.author.id)
                    if(data.money < 10000){
                        return message.channel.send(`You don't have enough money to buy xbox game pass `)
                    }else{
                        let codes = [];
                        if(!codes){
                            return message.channel.send(`:sob: All codes are finished `)
                        }
                        await sub(message.author.id, 10000)
                        const emb = new Discord.MessageEmbed()
                        .setColor('RED')
                        .setAuthor('COOKIE SHOP')
                        .setDescription(`
                        You just bought \`Xbox Game Pass\` GG
                        
                        Name: ${message.author.username}
                        
                        Order: Xbox Game Pass
                        `)
                    }
                }
                case "2":
                    {
                        let data = await balance(message.author.id)
                        if(data.money < 500){
                            return message.channel.send(`You don't have enough money to buy Violet Color `)
                        }else{
                           
                            await sub(message.author.id, 500)
                            const emb = new Discord.MessageEmbed()
                            .setColor('RED')
                            .setAuthor('COOKIE SHOP')
                            .setDescription(`
                            You just bought \`Violet Color\`
                            
                            Name: ${message.author.username}
                            
                            Order: Violet Color
                            `)
                            let role = message.guild.roles.cache.find(x => x.name === "Violet");
                            if(!role){
                                return message.channel.send(`I can't find Violet color role please ask admin to check it`)
                            }
                            message.member.roles.add(role.id)
                            message.channel.send(emb)
                            orderchannel.send(emb)
                           
                        }
                    }
                    case "3":
                        {
                            let data = await balance(message.author.id)
                            if(data.money < 500){
                                return message.channel.send(`You don't have enough money to buy Violet Color `)
                            }else{
                               
                                await sub(message.author.id, 500)
                                const emb = new Discord.MessageEmbed()
                                .setColor('RED')
                                .setAuthor('COOKIE SHOP')
                                .setDescription(`
                                You just bought \`Green Color\`
                                
                                Name: ${message.author.username}
                                
                                Order: Violet Color
                                `)
                                let role = message.guild.roles.cache.find(x => x.name === "Green");
                                if(!role){
                                    return message.channel.send(`I can't find Green color role please ask admin to check it`)
                                }
                                message.member.roles.add(role.id)
                                message.channel.send(emb)
                                orderchannel.send(emb)
                               
                            }
                        }
        }
    }
}