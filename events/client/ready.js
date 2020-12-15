module.exports = client => {

    setInterval(function() {
      let botStatus = [
        `COOKIE Server!`,
        ` ${client.users.cache.size} users!`,
        ` COOKIE's Users`,
        ` my prefixes ' ,c! , cookie`,
        `'help `,
        ` Vote now to COOKIE`,
        `${client.channels.cache.size} channels!`,
    
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
