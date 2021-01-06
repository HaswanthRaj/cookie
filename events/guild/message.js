  
const Timeout = new Map();
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
          const timeout = command.timeout;
          const key = message.author.id + command.name;
          const found = Timeout.get(key);
          if(found) {
            const timePassed = Date.now() - found;
            const timeLeft = timeout - timePassed;
            //the part at this command has a default cooldown of, did you want to hard code 15s? or have it be the commands.config.timeout?
            return message.reply(`**Cool Down down, you can use this command again in ${ms(timeLeft)} This command has a default cooldown of ${ms(timeout)}!**`);
          } else {
            command.run(bot, message, args);
            Timeout.set(key, Date.now());
          
            setTimeout(() => {
               Timeout.delete(key);
            }, timeout);
          }
        }else{
            command.run(bot,message,args)
        }

    }
}