const { MessageEmbed } = require('discord.js');
const axios = require('axios');
const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

module.exports = {
    name: "def",
    category: "Extra",
    run: async (client, message, args) => {
     const fetch = require('node-fetch');
    const querystring = require('querystring');
  if (!args.length) return message.channel.send('You need to supply a search term!');
	const query = querystring.stringify({ term: args.join(' ') });

  const { list }= await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
  const [answer] =list;

const embed = new MessageEmbed()
	embed.setColor('#EFFF00')
	embed.setTitle(answer.word)
	embed.setURL(answer.permalink)
	embed.addFields(
		{ name: 'Definition', value: trim(answer.definition, 1024) },
		{ name: 'Example', value: trim(answer.example, 1024) },
		{ name: 'Rating', value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.` }
	);

message.channel.send(embed);
    }
}