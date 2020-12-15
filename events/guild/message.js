  
const Timeout = new Set();
const {MessageEmbed} = require('discord.js')
const {prefixes} = require('../../botconfig.json')
const Discord = require('discord.js')
const ms = require('ms') 
    let db = require('quick.db'),
    fetch = require('node-fetch')
// const settings = require('../../schema/settings')

module.exports = async (bot , message) => {

     
   
    if (message.author.bot) return;



    //afk command

    let afk = new db.table("AFKs"),
      authorStatus = await afk.fetch(message.author.id),
      mentioned = message.mentions.members.first();
  
  if (mentioned) {
    let status = await afk.fetch(mentioned.id);
    
    if (status) {
      const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setDescription(`This user (${mentioned.user.tag}) is AFK: **${status}**`)
      message.channel.send(embed).then(i => i.delete({timeout: 20000}));
    }
  }

  if (authorStatus) {
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`**${message.author.tag}** is no longer AFK.`)
    message.channel.send(embed).then(i => i.delete({timeout: 20000}));
    afk.delete(message.author.id)
  }
  
  let prefix = false;
  for(const thisPrefix of prefixes) {
    if(message.content.toLowerCase().startsWith(thisPrefix)) prefix = thisPrefix;
  }

    if (!message.content.toLowerCase().startsWith(prefix)) return;

    if(!message.member) message.member = await message.guild.fetchMember(message);
    if(!message.guild) return;
    

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commandName= args.shift().toLowerCase();

    if (commandName.length === 0) return;
    
    const command =
    bot.commands.get(commandName) ||
    bot.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
    
    if (command) {
        if(command.timeout){
            if(Timeout.has(`${message.author.id}${command.name}`)) {
                return message.reply(`You can only use this command every ${ms(command.timeout)}!`)
            }else{
                
                command.run(bot, message, args);
                Timeout.add(`${message.author.id}${command.name}`)
                setTimeout(() => {
                    Timeout.delete(`${message.author.id}${command.name}`)
                }, command.timeout);
            }
        }else{
            command.run(bot,message,args)
        }

    }
}