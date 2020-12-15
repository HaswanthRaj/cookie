const { MessageEmbed } = require('discord.js')
const cpuStat = require('cpu-stat')
const os = require('os')
module.exports = {
    name: "botinfo",
    category: "bot",
    run: async (client, message, args) => {

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

        const usage = formatBytes(process.memoryUsage().heapUsed) // Your memory usage.
        const Node = process.version // Your node version.
        const CPU = percent.toFixed(2) // Your CPU usage.
        const cpuModel = os.cpus()[0].model // Your hosting CPU model.
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Bot Stats')
            .setColor('RANDOM')
            .addFields(
                {
                    name: '🌐 Servers',
                    value: `Serving ${client.guilds.cache.size} servers.`,
                    inline: true
                },
                {
                    name: '📺 Channels',
                    value: `Serving ${client.channels.cache.size} channels.`,
                    inline: true
                },
                {
                    name: '👥 Server Users',
                    value: `Serving ${client.users.cache.size}`,
                    inline: true
                },
                {
                    name: '⏳ Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: 'Join Date',
                    value: client.user.createdAt,
                    inline: true
                },
                {
                    name: 'Server Info',
                    value: `Cores: ${os.cpus().length}`,
                    inline: true
                },
                {
                    name: 'Node Version',
                    value: `Version: ${Node}`,
                    inline: true
                },
                {
                    name: 'CPU usage',
                    value: `Usage: ${CPU}`,
                    inline: true
                },
                {
                    name: 'Memory Usage',
                    value: `Memory: ${usage} / 512 MB`,
                    inline: true
                },
                {
                    name: 'CPU Model',
                    value: `Model: ${cpuModel}`,
                    inline: true
                }
            )
            .setFooter(`Created By: Lone#6015`)

         message.channel.send(embed)
    })}
}