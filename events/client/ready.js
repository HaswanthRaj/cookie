module.exports = client => {

    setInterval(function() {
      let botStatus = [
        `to ${client.commands.size} commands`,
        `to ${client.aliases.size} aliases`,
        `to COOKIE Server!`,
        `to ${client.users.cache.size} users!`,
        `to COOKIE's Users`,
        `to my prefixes ' ,c! , cookie`,
        `to 'help `,
        `to Vote now to COOKIE`,
        `to ${client.channels.cache.size} channels!`,
    
    ]
    let status = botStatus[Math.floor(Math.random() * botStatus.length)];
    client.user.setActivity(status, {type: "LISTENING"});

    }, 10000)

    //client.user.setUsername('Prime'); // sets the bots name
    client.user.setStatus("online"); // sets the bots status

    /*client.guilds.cache.forEach((guild) => {
      console.log(" - " + guild.name)
  })*/
    
  console.log(`Hello ${client.user.username} is now online!`); // consoles logs this when bot is turned on
 
};
