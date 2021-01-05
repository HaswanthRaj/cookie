const Discord = require("discord.js");
const fs = require("fs");
const axios = require('axios');
require("dotenv").config();
const Enmap = require("enmap");
const client = new Discord.Client({
    disableEveryone: true,
  });
  client.mongoose = require('./structures/mongoose')
client.commands = new Enmap();
client.queue = new Map();
client.data = fs.readFileSync('./data/quiz.json', 'utf-8')
const config = require("./botconfig.json");
const token = config.token;
client.snipeMap = new Map();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");
client.prefix = config.prefix;
client.config = {
    api: "AIzaSyCwocR-b9g13qwyBglT32YhKBJ66THVA8k"
};const { GiveawaysManager } = require("discord-giveaways");
// Starts updating currents giveaways
const manager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 30000,
    default: {
        botsCanWin: false,
        exemptPermissions: [],
        embedColor: "RED",
        reaction: "🎉"
    }
});
// We now have a giveawaysManager property to access the manager everywhere!
client.giveawaysManager = manager;

["command","event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
  });
 
  client.on('guildMemberAdd', async member => {
    require("./events/guild/memberAdd")(member)
  })

  client.on('guildMemberRemove', async (message) => {
    require("./events/guild/memberRemove")(message)
  })
  
  client.on('messageDelete', async (message) =>{
    require("./events/guild/messageDelete")(client, message)
  })
  client.mongoose.init();
  client.login(token);