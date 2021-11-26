const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "play",
  aliases: ["p"],
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const string = args.join(" ")
    if (!string) return message.channel.send(`${client.emotes.error} | Kindly provide me a song name or it's URL.`)
    try {
      client.distube.play(message, string)
    } catch (e) {
      message.channel.send(`${client.emotes.error} | Error: \`${e}\``)
    }
  }
}
