const figlet = require('util').promisify(require('figlet'));

module.exports={
    name:"banner",
    category: "Fun",
run: async (client, message, args) =>{
     let banner = args.join(" ");
        return message.channel.send(await figlet(banner), { code: true });
}
}