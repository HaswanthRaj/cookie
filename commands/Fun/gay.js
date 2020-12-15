const { MessageEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");

module.exports = {
    name: "gay",
    aliases: ["howgay"],
    category: "fun",
    description: "Calculates the gayness for another person.",
    usage: "[mention | id | username]",
    run: async (client, message, args) => {
        // Get a member from mention, id, or username
        let person = getMember(message, args[0]);

        if (!person || message.author.id === person.id) {
            person = message.guild.members
                .filter(m => m.id !== message.author.id)
                .random();
        }

        const gay = Math.random() * 100;
        const gayIndex = Math.floor(gay / 10);
        const gayLevel = "🏳️‍🌈".repeat(gayIndex) + "👨".repeat(10 - gayIndex);

        const embed = new MessageEmbed()
            .setColor("#ffb6c1")
            .addField(`☁ **${person.displayName}** this much gay :`,
            `🏳️‍🌈 ${Math.floor(gay)}%\n\n${gayLevel}`);

        message.channel.send(embed);
    }
}