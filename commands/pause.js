module.exports = {
    name: "pause",
    aliases: ["hold"],
    inVoiceChannel: true,
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is no song in my queue right now!`)
        if (queue.pause) {
            client.distube.resume(message)
            return message.channel.send("The song has  been resumed.")
        }
        client.distube.pause(message)
        message.channel.send("Done! Song paused.")
    }
}
