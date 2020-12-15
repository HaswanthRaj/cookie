const { canModifyQueue } = require("../../structures/music");

module.exports = {
  name: "loop",
  aliases: ["l"],
  description: "Toggle music loop",
  usage: "kid loop",
  run: async (client, message, args) =>{
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    // toggle from false to true and reverse
    queue.loop = !queue.loop;
    return queue.textChannel.send(`Loop is now ${queue.loop ? "**Enabled**" : "**Disabled**"}`).catch(console.error);
  }
};
