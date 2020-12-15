const solenolyrics = require('solenolyrics')
const Discord = require('discord.js')
const Util = require('discord.js')

module.exports ={
    name: "lyrics",
    category: "music",
    description: "gives the lyrics of given song name or currently playing song",
    usage: "kid lyrics",
    run: async (client, message, args) =>{

        let song = args.join(" ");
        const serverQueue = message.client.queue.get(message.guild.id);

        

        if(!args[0]){
            if(!serverQueue){
                return message.channel.send('Please give a song name to get the lyrics')
            
            }else{
                song = serverQueue.songs[0].title
            }
        }

        

        let lyrics = await solenolyrics.requestLyricsFor(song)
        let author = await solenolyrics.requestAuthorFor(song)
        let icon = await solenolyrics.requestIconFor(song)
        let title = await solenolyrics.requestTitleFor(song)

        if(!lyrics) return message.channel.send(`lyrics not found for ${song}`)


        const emb = new Discord.MessageEmbed()
        emb.setColor('RANDOM')
        emb.setTitle(title)
        emb.setAuthor(author)
        emb.setDescription(lyrics)
        emb.setThumbnail(icon)

        if (emb.description.length >= 2048)
      emb.description = `${emb.description.substr(0, 2045)}...`;
    return message.channel.send(emb).catch(console.error);
        
    }
}