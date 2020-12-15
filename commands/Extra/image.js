const { MessageEmbed } = require('discord.js');
const axios = require('axios');
const request = require('request');
const cheerio = require('cheerio')





module.exports = {
    name: "img",
    aliases: ["i"],
    category: "Extra", 
    timeout: 10000,
    run: async (client, message, args) => {   
    if(!message.channel.id === '745573214964678726') return message.channel.send(`You can only use this command in <#745573214964678726>`).then(m => m.delete({timeout: 10000}))
     
        var parts = message.content.split(" "); 
  // call the image function
  image(message, parts); // Pass requester message to image function
   function image(message, parts) {
    /* extract search query from message */
    var search = parts.slice(1).join(" "); // Slices of the command part of the array ["!image", "cute", "dog"] ---> ["cute", "dog"] ---> "cute dog"
    
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody) {
      if (error) {
        // handle error
        return;
      }
      /* Extract image URLs from responseBody using cheerio */
      $ = cheerio.load(responseBody); // load responseBody into cheerio (jQuery)
      // In this search engine they use ".image a.link" as their css selector for image links
      var links = $(".image a.link");
      // We want to fetch the URLs not the DOM nodes, we do this with jQuery's .attr() function
      // this line might be hard to understand but it goes thru all the links (DOM) and stores each url in an array called urls
      var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
      if (!urls.length) {
        // Handle no results
        return;
      }
          const ig = new MessageEmbed();
          ig.setTitle("Image Search")
          ig.setColor('RANDOM')
          ig.setImage(urls[Math.floor(Math.random() * urls.length)])
          ig.setFooter('Loney V3.5')
          ig.setTimestamp()
      // Send result
      message.channel.send(ig);
    });
    }
}}