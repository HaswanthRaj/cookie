const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const Discord = require('discord.js')
const ms = require('ms')
module.exports = {
    name: "help",
    aliases: ["h", "cmds", "commands"],
    category: "info",
    description: "Returns all commands, or one specific command info",
    usage: "[command | alias]",
    run: async (client, message, args) => {
      if (!args[0]){
        let help= new MessageEmbed()
  help.setColor('RANDOM')
  help.setTitle('COOKIE Help')
  help.addFields(
    { name: '\u200B', value: '\u200B' },
    { name: '**Image Commands**', value: '`\' help image`',inline: true },
    { name: '**Others Comamands**', value: '` \' help others`',inline: true },
    { name: '**Moderation Commands**', value: '`\' help mod `',inline: true },
    { name: '**Information Commands**', value: '` \' help info`',inline: true },
    { name: '**Music Cmmands**', value: '` \' help music `',inline: true },
    { name: '**Fun Commands**', value: '` \' help fun `',inline: true },
    { name: '**Giveaway Commands**', value: '` \' help giveaway`',inline: true },
    { name: '**Translate Commands**', value: '` \' help translate`',inline: true },
    { name: '**ImageGeneration Commands**', value: '` \' imgen help`',inline: true },
  )
 
  help.setTimestamp()
  help.setURL('https://discord.com/oauth2/authorize?client_id=748778813357555733&scope=bot&permissions=8')
  help.setFooter('My prefixes are \' , c! and cookie')
message.channel.send(help);
  }
  if(args[0] === "image"){
    const update = new Discord.MessageEmbed();
    update.setTitle('Image help' )
    update.setColor('RANDOM')
    update.setThumbnail('https://cdn.discordapp.com/avatars/748778813357555733/f1acd65fdf22a6c1187e445179ec431b.png?size=256')
    update.setDescription('``` i (image),\' gif (search), \' meme, \' hug (user), \' wink(user)```')
  
    update.setTimestamp()
    return message.channel.send(update);
   }
   
   else if(args[0] === "others"){
    const update = new Discord.MessageEmbed();
    update.setTitle('Others help' )
    update.setColor('RANDOM')
    update.setThumbnail('https://cdn.discordapp.com/avatars/748778813357555733/f1acd65fdf22a6c1187e445179ec431b.png?size=256')
    update.setDescription('```\' weather (city), \' corona (country) , \' invite, \' vote,```')
  
    update.setTimestamp()
    return message.channel.send(update);
   }
   else if(args[0] === "giveaway"){
    const update = new Discord.MessageEmbed();
    update.setTitle('Giveaway help' )
    update.setColor('RANDOM')
    update.setThumbnail('https://cdn.discordapp.com/avatars/748778813357555733/f1acd65fdf22a6c1187e445179ec431b.png?size=256')
    update.setDescription('``` o \' giveaway <time> <number of prize> <prize name>, \n o \' reroll <giveaway message id> \n o \' delete-giveaway <giveaway message id> \n o \' edit-giveaway <giveaway message> <time> <winner count> <prize>```')
  
    update.setTimestamp()
    return message.channel.send(update);
   }
   else if(args[0] === "mod"){
    const update = new Discord.MessageEmbed();
    update.setTitle('Mod help' )
    update.setColor('RANDOM')
    update.setThumbnail('https://cdn.discordapp.com/avatars/748778813357555733/f1acd65fdf22a6c1187e445179ec431b.png?size=256')
    update.setDescription('```\' kick, \' say (word), \' dm (mention) (word), \' ban, \' send <channel> <message>, \' totalbans, \' lock on or \' lock off, \' giverole <mention> <role id> \' unban <user id>, \' report <mention> <reason> ```')
  
    update.setTimestamp()
    return message.channel.send(update);
   }
   else if(args[0] === "info"){
    const update = new Discord.MessageEmbed();
    update.setTitle('info help' )
    update.setColor('RANDOM')
    update.setThumbnail('https://cdn.discordapp.com/avatars/748778813357555733/f1acd65fdf22a6c1187e445179ec431b.png?size=256')
    update.setDescription('```\' user (mention), \' afk <reason>, \' serverinfo, \' botinfo, \' rolename <role id>, \' uptime , \' channelinfo```')
  
    update.setTimestamp()
    return message.channel.send(update);
   }
   else if(args[0] === "music"){
    const update = new Discord.MessageEmbed();
    update.setTitle('Music help' )
    update.setColor('RANDOM')
    update.setThumbnail('https://cdn.discordapp.com/avatars/748778813357555733/f1acd65fdf22a6c1187e445179ec431b.png?size=256')
    update.setDescription('```\n \ \' play (song), \' searchsong <songname> ,\n \' loop,\' remove <number>, \' skipto <number>,\n \' np, \' skip,\' queue, \n \' pause,\n \' lyrics <song name> or \' lyrics,\n \' resume, \' volume (percent), \' dc```')
  
    update.setTimestamp()
    return message.channel.send(update);
   }
   else if(args[0] === "fun"){
    const update = new Discord.MessageEmbed();
    update.setTitle('Fun help' )
    update.setColor('RANDOM')
    update.setThumbnail('https://cdn.discordapp.com/avatars/748778813357555733/f1acd65fdf22a6c1187e445179ec431b.png?size=256')
    update.setDescription('```\n \' rps, \' love <mention>, \' gay <mention>, \' joke , \' banner <text> \n ```')
  
    update.setTimestamp()
    return message.channel.send(update);
   }
   else if(args[0] === "translate"){
    const update = new Discord.MessageEmbed();
    update.setTitle('Translation help' )
    update.setColor('RANDOM')
    update.setThumbnail('https://cdn.discordapp.com/avatars/748778813357555733/f1acd65fdf22a6c1187e445179ec431b.png?size=256')
    update.setDescription('```\' translate lang1-lang2 <word> , \' language list, \' language list2, \' language list3```')
  
    update.setFooter('Example: \' translate en-es hello')
    
    update.setTimestamp()
     return message.channel.send(update);
   }
   
   if (args[0]) {
    return getCMD(client, message, args[0]);
} else {
    return getAll(client, message);
}
    },
};



//get the dynamic help


function getAll(client, message) {
  const embed = new MessageEmbed().setAuthor(`${message.author.username}, Requested Commands: ` , message.author.displayAvatarURL()).setColor('#fb644c').setThumbnail(client.user.displayAvatarURL());

  const commands = (category) => {
      return client.commands
          .filter((cmd) => cmd.category === category)
          .map((cmd) => `- \`${cmd.name}\``)
          .join(" ");
  };

  const info = client.categories
      .map(
          (cat) =>
              stripIndents`**${cat[0].toUpperCase() + cat.slice(1)}** (${client.commands.filter(cmd => cmd.category == cat).size}) : \n${commands(
                  cat
              )}`
      )
      .reduce((string, category) => string + "\n" + category);
  embed.setFooter(`There are ${client.commands.size} commands \' <command name>`, message.author.displayAvatarURL())
  ///return message.member.send(embed.setDescription(info));
}

function getCMD(client, message, input) {
  const embed = new MessageEmbed();

  const cmd =
      client.commands.get(input.toLowerCase()) ||
      client.commands.get(client.aliases.get(input.toLowerCase()));

  let info = `No information found for command **${input.toLowerCase()}**`;

  if (!cmd) {
      return message.channel.send(embed.setColor('#fb644c').setAuthor(`${message.author.username}, Requested Commands:` , message.author.displayAvatarURL()).setFooter(message.author.username, message.author.displayAvatarURL()).setDescription(info).setThumbnail(client.user.displayAvatarURL()));
  }

  if (cmd.name) info = `**Command name**: ${cmd.name}`;
  if (cmd.aliases)
      info += `\n**Aliases**: ${cmd.aliases.map((a) => `\`${a}\``).join(", ")}`;
  if (cmd.description) info += `\n**Description**: ${cmd.description}`;
  if (cmd.usage) {
      info += `\n**Usage**: ${cmd.usage}`;
      embed.setFooter(`Syntax: <> = required, [] = optional`);
  }
  if (cmd.timeout) info += "\n**Timeout**: " + ms(cmd.timeout);
  return message.channel.send(embed.setColor('#fb644c').setAuthor(`${message.author.username}` , message.author.displayAvatarURL()).setDescription(info).setFooter(message.author.username, message.author.displayAvatarURL()).setThumbnail(client.user.displayAvatarURL()));
}
