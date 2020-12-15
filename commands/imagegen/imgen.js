const DIG = require('discord-image-generation');
const Discord = require('discord.js');

module.exports = {
    name: "imgen",
    category: "imagegen",
    description: "generates images by using user avatar for fun",
    usage: "' imgen <type of generation>",
    run: async (client, message, args) =>{
//gay gen
        if(args[0] === "gay"){
            if(!message.mentions.users.first()){
                let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
                let img =  await new DIG.Gay().getImage(avatar);
                let attach = new Discord.MessageAttachment(img, "gay.png");
                message.channel.send(attach)
            } else {
                let user = message.mentions.users.first();
                let avatar = client.users.cache.get(user.id).displayAvatarURL({ dynamic: false, format: 'png' })
                let img = await new DIG.Gay().getImage(avatar);
                let attach = new Discord.MessageAttachment(img, "gay.png");
                message.channel.send(attach)
            }}else if(args[0] === "beautiful"){
                if(!message.mentions.users.first()){
                    let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
                    let img =  await new DIG.Beautiful().getImage(avatar);
                    let attach = new Discord.MessageAttachment(img, "beautiful.png");
                    message.channel.send(attach)
                } else {
                    let user = message.mentions.users.first();
                    let avatar = client.users.cache.get(user.id).displayAvatarURL({ dynamic: false, format: 'png' })
                    let img =  await new DIG.Beautiful().getImage(avatar);
                    let attach = new Discord.MessageAttachment(img, "beautiful.png");
                    message.channel.send(attach)
                }
        }else if(args[0] === "ad"){
            if(!message.mentions.users.first()){
                let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' })
                let img =  await new DIG.Ad().getImage(avatar);
                let attach = new Discord.MessageAttachment(img, "ad.png");
                message.channel.send(attach)
            } else {
                let user = message.mentions.users.first();
                let avatar = client.users.cache.get(user.id).displayAvatarURL({ dynamic: false, format: 'png' })
                let img =  await new DIG.Ad().getImage(avatar);
                let attach = new Discord.MessageAttachment(img, "ad.png");
                message.channel.send(attach)
            }
        }else if(args[0] === "delete"){
            if(!message.mentions.users.first()){
                let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
                let img =  await new DIG.Delete().getImage(avatar);
                let attach = new Discord.MessageAttachment(img, "delete.png");
                message.channel.send(attach)
            } else {
                let user = message.mentions.users.first();
                let avatar = client.users.cache.get(user.id).displayAvatarURL({ dynamic: false, format: 'png' })
                let img =  await new DIG.Delete().getImage(avatar);
                let attach = new Discord.MessageAttachment(img, "delete.png");
                message.channel.send(attach)
            }
        }else if(args[0] === "rip"){
            if(!message.mentions.users.first()){
                let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
                let img =  await new DIG.Rip().getImage(avatar);
                let attach = new Discord.MessageAttachment(img, "rip.png");
                message.channel.send(attach)
            } else {
                let user = message.mentions.users.first();
                let avatar = client.users.cache.get(user.id).displayAvatarURL({ dynamic: false, format: 'png' })
                let img =  await new DIG.Rip().getImage(avatar);
                let attach = new Discord.MessageAttachment(img, "rip.png");
                message.channel.send(attach)
            }
        }else if(args[0] === "trash"){
            if(!message.mentions.users.first()){
                let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
                let img =  await new DIG.Trash().getImage(avatar);
                let attach = new Discord.MessageAttachment(img, "trash.png");
                message.channel.send(attach)
            } else {
                let user = message.mentions.users.first();
                let avatar = client.users.cache.get(user.id).displayAvatarURL({ dynamic: false, format: 'png' })
                let img =  await new DIG.Trash().getImage(avatar);
                let attach = new Discord.MessageAttachment(img, "trash.png");
                message.channel.send(attach)
            } 
        }else if(args[0] === "bobross"){
            if(!message.mentions.users.first()){
                let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
                let img =  await new DIG.Bobross().getImage(avatar);
                let attach = new Discord.MessageAttachment(img, "bobross.png");
                message.channel.send(attach)
            } else {
                let user = message.mentions.users.first();
                let avatar = client.users.cache.get(user.id).displayAvatarURL({ dynamic: false, format: 'png' })
                let img =  await new DIG.Bobross().getImage(avatar);
                let attach = new Discord.MessageAttachment(img, "bobross.png");
                message.channel.send(attach)
            } 
        }else if(args[0] === "facepalm"){
            if(!message.mentions.users.first()){
                let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
                let img =  await new DIG.Facepalm().getImage(avatar);
                let attach = new Discord.MessageAttachment(img, "facepalm.png");
                message.channel.send(attach)
            } else {
                let user = message.mentions.users.first();
                let avatar = client.users.cache.get(user.id).displayAvatarURL({ dynamic: false, format: 'png' })
                let img =  await new DIG.Facepalm().getImage(avatar);
                let attach = new Discord.MessageAttachment(img, "facepalm.png");
                message.channel.send(attach)
            } 
        }else if(args[0] === "wanted"){
            if(!message.mentions.users.first()){
                let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
                let img =  await new DIG.Wanted().getImage(avatar, `$`);
                let attach = new Discord.MessageAttachment(img, "wanted.png");
                message.channel.send(attach)
            } else {
                let user = message.mentions.users.first();
                let avatar = client.users.cache.get(user.id).displayAvatarURL({ dynamic: false, format: 'png' })
                let img =  await new DIG.Wanted().getImage(avatar, `$`);
                let attach = new Discord.MessageAttachment(img, "wanted.png");
                message.channel.send(attach)
            } 
        }
        else if(args[0] === "help"){
            const update = new Discord.MessageEmbed();
      update.setTitle('Imgen help' )
      update.setColor('RANDOM')
      update.setThumbnail('https://cdn.discordapp.com/avatars/748778813357555733/f1acd65fdf22a6c1187e445179ec431b.png?size=256')
      update.setDescription('`\' imgen gay, \' imgen ad, \' imgen delete, \' imgen beautiful, \' imgen rip, \' imgen wanted, \' imgen facepalm, \' imgen bobross`')
      update.addField("Check Loney Website", "[Check Loney Website for help and support](https://www.loney.epizy.com/)")
      update.setTimestamp()
      message.channel.send(update);
        }
    }
}