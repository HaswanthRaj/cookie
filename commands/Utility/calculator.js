const { evaluate } = require('mathjs')
const math = require('mathjs')
const Discord = require('discord.js')

module.exports={
    name:"calulate",
    aliases: ["cal", "add", "sub", "multiply"],
    category: "utility",
    run: async (client, message, args) =>{
        const red = new Discord.MessageEmbed()
        red.setTitle('Calculator')
        red.setColor('RED')

        let val = args.join(" ")
        if(!val){
            red.setDescription(`***Please provide a value to calculate \' ${message.author.username}***`)
            return message.channel.send(red)
        }

        let ans;
        try{
            
            ans = math.evaluate(val)

        }catch(e){
            red.setDescription(`***Give a valid question \' ${message.author.username}***`)
            return message.channel.send(red)
        }
        
        const emb = new Discord.MessageEmbed()
        emb.setColor('GREEN')
        emb.setTitle('COOKIe Calculator')
        emb.setDescription(
            `\`\`\`\n${val}  \n\n${ans} \`\`\``)
        emb.setImage('https://linkpicture.com/q/kisspng-calculator-computer-icons-clip-art-calculator-5b000f4fdcd830.3101436915267305759046.png')
        emb.setFooter('COOKIE server')

        message.channel.send(emb)

        


    }
}