const settings = require('../../schema/settings')

module.exports = {
    name: 'channel',
    category: 'bot',
    run: async (client, message, args) => {
        console.log(args)
        if (args[0] === 'enable'){
            try{
                let data = await settings.findOneAndUpdate(
                    { _id: message.guild.id},
                    {
                        id: message.guild.id,
                    guildname: message.guild.name,
                    channeldisable: 0,
                    },{
                        upsert: true
                    })
                if(!data){
                await new settings({
                    _id: message.guild.id,
                    imageset: 0,
                    guildname: message.guild.name
                })
            }else {
                data.imageset = 0;

            }
            message.channel.send('🟩 Loney is **Enabled** in this channel')
            } catch(e){
                console.log(e);
              message.channel.send('🟥 Failed to Disable this channel')
            }
        }
        else if (args[0] === 'disable'){
            try{
                let data = await settings.findOneAndUpdate(
                    { _id: message.guild.id},
                    {
                        id: message.guild.id,
                      guildname: message.guild.name,
                      channeldisable: message.channel.id
                    },{
                        upsert: true
                    })
                if(!data){
                await new settings({
                    _id: message.guild.id,
                    imageset: 1,
                    guildname: message.guild.name
                })
            }else {
                data.imageset = 1;

            }
            message.channel.send('🟩 Loney is  **Disabled** in this channel ')
        } catch(e){
            console.log(e);
          message.channel.send('🟥 Failed to **Disable** in this channel')
        }
    }
    }
}