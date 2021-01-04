const Discord = require('discord.js')
const fs = require('fs')
const d = require('')
const data = fs.readFileSync("../../data/quiz.json", 'utf-8')
const { add } = require('../../structures/economy')



//Essential variables
        var dataJson = JSON.parse(data)
        var answered = false
        var players = []
        var names = []
        var scores = []
       
        var questionAnswer = ''

module.exports={
    name: "trivia",
    category: "economy",
    run: async (client, message, args) =>{
        setInterval(function (){
            qa(message)
        

        setTimeout(function () {
           message.delete()
           message.channel.send('No one answered the question')
        }, 20000)
        }, 190000)
        
    }
}

async function qa(message) {
     var questionLength = dataJson.questions.length
     var question = Math.floor(Math.random() * dataJson.questions.length)
	if (question <= (questionLength - 1)) {
		answered = false
		questionAnswer = dataJson.questions[question].answers.text.toLowerCase()
        message.channel.send('**``` Question:' + dataJson.questions[question].text + '```**')
        async function filter(msg) {
            if(msg.toLowerCase() === questionAnswer ){
                await add(msg.author.id, msg.author.tag, 10)
                 msg.reply('You answered correctly 10 cookies added to your account')
                
                return true
            }
            else{
                return false
            }
          }
        let response = await message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
        const reply = response.first().content;
        if(reply === questionAnswer){
            message.channel.send( response.author)
        }

	} else {
		questionAnswer = ''
		message.channel.send('**No questions found*')
	}
}