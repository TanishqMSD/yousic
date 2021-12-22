const Discord = require("discord.js")

module.exports = {
    name: "help",
    aliases: ["support", "h", "commands"],
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setColor('#f9ff00')
            .setTitle("Here is a list of my commands")
            .setDescription(client.commands.map(cmd => `\`${cmd.name}\``).join(", "))
            .setFooter('Made By TANISHQ! ')
            .setTimestamp()
        message.channel.send(embed)
    }
}
