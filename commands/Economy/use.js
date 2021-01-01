const { add, subcc, balance, userdata } = require('../../structures/economy')
const Discord = require('discord.js')

module.exports={
    name: "use",
    aliases: ["use"],
    category: "Economy",
    run: async(client, message, args)=>{
        const k = args[0]
        console.log(k)
        switch(k){
            case "cashcheck":
                {
                const fm = ["100", "1", "1", "1", "1", "1", "1", "1", "1", "200", "10000", "1978", "457", "1000", "100000", "5000"]
                const ma = fm[Math.floor(Math.random() * fm.length)];
                let a = await userdata(message.author.id)
                if(a.cc <= '0'){
                  message.channel.send('You don\'t have any Cashcheck');
                  return;
                }
                await add(message.author.id, message.author.tag, parseInt(ma))
                await subcc(message.author.id, message.author.tag, 1)
                let bal = await balance(message.author.id)
       const emb = new Discord.MessageEmbed()
         .setColor("RANDOM")
         .setDescription(
           `***The Sun Bank Check***
           
           **From:** Mr.XXXXXXXXXXX
           **To:** ${message.author.username}
                    ------------------------------------  
           **Amount:** ${ma} $ 💵
                      ----------------------------------
                      
           **Balance:** ${bal.money} in wallet`,
           message
         )
         .setTimestamp();
       message.channel.send(emb);
         }
         break;
   
         default:{
             message.channel.send('Type !use <itemname>, `Items available : cashcheck`')
         }
         break;
     }
    }
}