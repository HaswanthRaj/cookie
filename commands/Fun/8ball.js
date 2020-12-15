module.exports={
    name:"8ball",
    category: "Fun",
run: async (client, message, args) =>{
    const answers = [
        'Maybe.',
        'Certainly not.',
        'I hope so.',
        'Not in your Wildest dreams.',
        'There is a good chance.',
        'Quite likely.',
        'I think so.',
        'I hope not.',
        'I hope so.',
        'Never!',
        'Fuhgeddaboudit.',
        'Ahaha! Really?!?',
        'Pfft.',
        'Sorry bucko.',
        'Hell yes.',
        'Hell to the no.',
        'The future is bleak.',
        'The future is uncertian.',
        'I would rather not say.',
        'Who cares?',
        'Possibly.',
        'Never, ever, ever.',
        'There is a small chance.',
        'Yes.',
    ];
    let question = args;
                return(message.reply(question.join(' ').endsWith('?')?
            `🎱 ${answers[Math.floor(Math.random() * answers.length)]}` :
            `:8ball: That doesn\'t seem to be a question, please try again!`)
)
}}