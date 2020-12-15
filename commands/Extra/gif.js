const giphy = require('giphy-api')('nEa4jRswrhil8vYgM1G2RqAp2L0YVzZ0');

module.exports = {
    name: "gif",
    category: "Extra",

    run: async (client, message, args) =>{

        giphy.search(args[0]).then(function (res) {
            const a = res.data
            const b = res.data[Math.floor(Math.random() * a.length)]
            message.channel.send(b.url)
        })
    }
}