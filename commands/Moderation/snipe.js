const Discord = require('discord.js')

module.exports={
    name: "snipe",
    category: "info",
    description: "this command is used to find the laste sent messages in the channel to find ghost pingers",
    run: async(client, message, args)=>{
        String.prototype.embedify = function() {
            return new Discord.MessageEmbed().setColor('GREEN').setDescription(this)
        }
        
        let snipe = client.snipeMap.get(message.guild.id)
        if(!snipe) return message.channel.send('Could not find a message that was deleted.'.embedify())
    
        if(args[0] == 'image') {
            if(!args[1]) return message.channel.send('Please provide a message to retrieve the image from!'.embedify())
            let image = snipe[args[1] - 1]
            if(!image[1]) return message.channel.send('That message does not have an attached (deleted) image!'.embedify())
            console.log(image[1])
            return message.channel.send(new Discord.MessageEmbed().setColor(client.config.embedColor).setImage(image[1]))
        }
    
        let counter = 0
    
        return message.channel.send(`${snipe.map(msg => `**${++counter} -** ${msg[0].content ? `${msg[0].content}${!msg[1] ? '' : '\n[IMAGE WAS DELETED]'}` : (!msg[1] ? '' : '[IMAGE WAS DELETED]')}\n**Author -** <@${msg[0].author.id}>`).join('\n\n')}`.embedify().addField('NOTE:', `Message appear in order, newest deleted message is \`1.\` ,etc. Only the last five deleted messages are saved. You can also retrive the one image delete *\nTo view the images, please type \`kid snipe image <number of message to get the image from>\``))
    }
}