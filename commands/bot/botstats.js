const cpuStat = require('cpu-stat');
const os = require('os')

const Discord = require('discord.js');

module.exports ={
    name: "botstats",
    aliases: ["cpu"],
    category: "bot",
    run: async (client, message, args) =>{


        function formatBytes (a, b) {
            if (0 == a) return "0 Bytes";
            let c = 1024,
                d = b || 2,
                e = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
                f = Math.floor(Math.log(a) / Math.log(c));
            
            return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f]
          } // Create MB, KB, TB or something in the back of your memory counters.
          
      
        cpuStat.usagePercent(function (error, percent, seconds) {
            if (error) {
              return console.error(error)
            }
            
            const cores = os.cpus().length // Counting how many cores your hosting has.
            const cpuModel = os.cpus()[0].model // Your hosting CPU model.
            const guild = client.guilds.cache.size.toLocaleString() // Counting how many servers invite your bot. Tolocalestring, meaning separate 3 numbers with commas.
            const user = client.users.cache.size.toLocaleString() // Counting how many members in the server that invite your bot.
            const channel = client.channels.cache.size.toLocaleString() // Counting how many channels in the server that invite your bot.
            const usage = formatBytes(process.memoryUsage().heapUsed) // Your memory usage.
            const Node = process.version // Your node version.
            const CPU = percent.toFixed(2) // Your CPU usage.
            
            const embed = new Discord.MessageEmbed() // Stable or < below than 11.x.x use RichEmbed. More than 12.x.x or Master or https://github.com/discordjs/discord.js/ (github:discordjs/discord.js) use MessageEmbed.
            // Actually they are exactly the same.
            embed.addField('Bot Statistics:', `Server: ${guild} \nUser: ${user} \nChannel: ${channel} \nUsage: ${usage} \nNode: ${Node} \nCPU Usage: ${CPU}%`) // Use Grave accent or `` 
            // (its on your keyboard, besides on number 1.)
            // Use \n to make a new line.
            embed.addField('Physical Statistics:', `CPU: ${cores} - ${cpuModel}`)
            embed.setColor('RANDOM')
            // Let's test it!
            // Use ** turn the text into bold.
            // Let's test again.
            message.channel.send(embed)
        })
    }
}