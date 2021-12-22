const Discord = require("discord.js")

module.exports = {
    name: "list",
    aliases: ["lf", "filter", "f"],
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setColor('#f9ff00')
            .setTitle("Here is a list of my commands")
            .setDescription('3d, bassboost, echo, karaoke, nightcore, earwax, tremolo, phaser')
            .setFooter(`Made By TANISHQ!`)
            .setTimestamp()
        message.channel.send(embed)
    }
}
