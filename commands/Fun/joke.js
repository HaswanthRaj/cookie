const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "joke",
    category: "fun",
    run: async (client, message, args) => {
        const url = "https://some-random-api.ml/joke";      
        let image, response;
        try {
            response = await axios.get(url);
            image = response.data;
         } catch (e) {
            client.channels.cache.get(`770643535992979506`).send(e)
            return message.channel.send(`An error occured, please try again!`)
        }
      
        const embed = new MessageEmbed()
            .setTitle(`Joke`)
            .setColor('RANDOM')
            .setDescription(image.joke)
            .setTimestamp();
      
        await message.channel.send(embed)
    }
}