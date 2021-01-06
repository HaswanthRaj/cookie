const Discord = require('discord.js')
const { add } = require('../../structures/economy')



//Essential variables
        var dataJson
        var answered = false
        var players = []
        var names = []
        var scores = []
       
        var questionAnswer = ''

module.exports={
    name: "trivia",
    category: "economy",
    run: async (client, message, args) =>{
        dataJson = JSON.parse(client.data)
        setInterval(function (){
             qa(message)      
        }, 900000)
        
    }
}

async function qa(message) {
     var questionLength = dataJson.questions.length
     var question = Math.floor(Math.random() * dataJson.questions.length)
	if (question <= (questionLength - 1)) {
		answered = false
		questionAnswer = dataJson.questions[question].answers.text.toLowerCase()
        message.channel.send('```css\nQuiz Time Bros !!!!\n``` \n **Question: \n ' + dataJson.questions[question].text + '**')
        async function filter(msg) {
            if(msg.content.toLowerCase() === questionAnswer ){
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