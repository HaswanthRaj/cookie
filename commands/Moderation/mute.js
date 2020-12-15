const ms = require('ms')
const Discord = require('discord.js')

module.exports={
    name: "mute",
    category: "moderation",
    description: "mute and unmute a player automatically",
    usage: "kid mute <mention> <time> <reason>",
    run: async(client, message, args) =>{
      const red = new Discord.MessageEmbed()
      red.setColor('RED')

        if (!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("You don't have enough authority to do this.");
        if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) 
    return message.channel.send("Give me the permissions first. I need Manage roles and administrator permission ")

    if(!args[0]){
        return message.reply('You didn\'t mentioned any user')
    }
    

  let role = message.guild.roles.cache.find(x => x.name === "Muted");
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if (!member) return message.reply(`I can't find the user ` + member)
  if (member.id === message.author.id){
    red.setDescription(`**You can't Mute yourself**`)
    return message.channel.send(red); 
} if(member.hasPermission("ADMINISTRATOR")){
  red.setDescription("I can't mute this user he is Admin / Mod")
  return message.channel.send(red)
}
if (member.id === client.user.id) {
    red.setDescription(`**You can't Mute me**`)
    return message.channel.send(red);
}


  if(!args[1]){
      return message.reply('please mention the time , kid mute <mention> <time> <reason>')
  }
  let rolescache ={};
  
  rolescache[member.id] = member.roles.cache;
  let time = args[1];
  let reason = args.slice(2).join(' ');
  if (!reason) reason = "No reason provided";
  if (!role) {
    try {
        role = await message.guild.roles.create({
            data: {
          name: "Muted",
          color: "#000000",
          permissions: [],
          position: 4
            }
        })
        message.guild.channels.forEach(async(channel, id) => {
          message.channel.overwritePermission(role, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            SEND_TTS_MESSAGES: false,
            ATTACH_FILES: false,
            SPEAK: false
          });
        });
      } catch (e) {
        console.log(e);
      }}
try{
    member.roles.set([]).then(person => person.roles.add(role.id)).catch(console.error);
    const emb = new Discord.MessageEmbed()
    .setColor('#00FF00')
    .setDescription(`**Muted ${member.user.tag} for ${time} Reason: ${reason}**
    Note: muted roles is created automatically by bot but make it in top then other normal roles`)
      message.channel.send(emb)

}catch(e){
    const emb = new Discord.MessageEmbed()
    console.log(e)
    
    .setColor('#FF0000')
    .setDescription(`**Can't mute the ${member.user.tag}**`)
    message.channel.send(emb)
}
setTimeout(function(){
    //Grab their existing roles and set them back to the user, we wont need to remove the muted role since setting the roles would override all existing ones already
    member.roles.set(rolescache[member.id]).catch(console.error)
    message.channel.send(`${member.user.tag} has now been unmuted`)
}, ms(time));

    }
}