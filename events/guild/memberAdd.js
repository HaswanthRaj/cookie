// this is where you add your stuff for when a users joins
const { Message } = require('discord.js');
const Discord = require('discord.js')
const Canvas = require('canvas');

module.exports = async (member) => {
 
  console.log('in member add')
  let welchan = "745535441939202109"
  const channel = member.guild.channels.cache.get(welchan);
  if(!channel) return;
  channel.send(`Hey ${member}, Welcome to COOKIE :)`)
 
    //welcome message
    const applyText = (canvas, text) => {
      const ctx = Canvas.getContext('2d');
    
      // Declare a base size of the font
      let fontSize = 70;
    
      do {
        // Assign the font to the context and decrement it so it can be measured again
        ctx.font = `${fontSize -= 10}px sans-serif`;
        // Compare pixel width of the text to the canvas minus the approximate avatar size
      } while (ctx.measureText(text).width > canvas.width - 300);
    
      // Return the result to use in the actual canvas
      return ctx.font;
    };

    const canvas = Canvas.createCanvas(700, 250)
    const ctx = canvas.getContext('2d')
    // Load the background image and draw it to the canvas
    const background = await Canvas.loadImage('https://miro.medium.com/max/700/0*cjzqkJt1XGKyYk2A.png')
    let x = 0
    let y = 0
    ctx.drawImage(background, x, y)
    // Load the user's profile picture and draw it
    const pfp = await Canvas.loadImage(
      member.user.displayAvatarURL({
        format: 'png',
      })
    )
    x = canvas.width / 2 - pfp.width / 2
    y = 25
    ctx.drawImage(pfp, x, y)
    // Display user text
    ctx.fillStyle = '#ffffff' // White text
    ctx.font = '35px sans-serif'
    let text = `Welcome ${member.user.tag}!`
    x = canvas.width / 2 - ctx.measureText(text).width / 2
    ctx.fillText(text, x, 60 + pfp.height)
    // Display member count
    ctx.font = '30px sans-serif'
    text = `Member #${member.guild.memberCount}`
    x = canvas.width / 2 - ctx.measureText(text).width / 2
    ctx.fillText(text, x, 100 + pfp.height)
    // Attach the image to a message and send it
    const attachment = new Discord.MessageAttachment(canvas.toBuffer())
    channel.send('', attachment)
     
     
  };

