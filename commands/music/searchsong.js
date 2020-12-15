const Discord = require('discord.js')
const YouTube = require('simple-youtube-api')

module.exports = {
    name: "searchsong",
    category: "music",
    description: "search video in youtube and returns the results and select by number to play",
    usage: "kid searchsong <song name> ",
    run: async (client, message, args) =>{
        const youtube = new YouTube(client.config.api);
        if (!args.length)
      return message
        .reply(`Usage: kid searchsong <Video Name>`)
        .catch(console.error);
    if (message.channel.activeCollector)
      return message.reply("A message collector is already active in this channel.");
    if (!message.member.voice.channel)
      return message.reply("You need to join a voice channel first!").catch(console.error);

    const search = args.join(" ");

    let resultsEmbed = new Discord.MessageEmbed()
      .setTitle(`**Reply with the song numbers you want to play example: 1 or 1,2,3**`)
      .setDescription(`Results for: ${search}`)
      .setColor("RANDOM");

    try {
      const results = await youtube.searchVideos(search, 10);
      results.map((video, index) => resultsEmbed.addField(video.shortURL, `${index + 1}. ${video.title}`));

      let resultsMessage = await message.channel.send(resultsEmbed);

      function filter(msg) {
        const pattern = /^[0-9]{1,2}(\s*,\s*[0-9]{1,2})*$/g;
        return pattern.test(msg.content);
      }

      message.channel.activeCollector = true;
      const response = await message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ["time"] });
      const reply = response.first().content;

      if (reply.includes(",")) {
        let songs = reply.split(",").map((str) => str.trim());

        for (let song of songs) {
          await message.client.commands
            .get("play")
            .run(client, message, [resultsEmbed.fields[parseInt(song) - 1].name]);
        }
      } else {
        const choice = resultsEmbed.fields[parseInt(response.first()) - 1].name;
        client.commands.get("play").run(client, message, [choice]);
      }

      message.channel.activeCollector = false;
      resultsMessage.delete().catch(console.error);
      response.first().delete().catch(console.error);
    } catch (error) {
      console.error(error);
      message.channel.activeCollector = false;
      message.reply(error.message).catch(console.error);
    }
    }
}