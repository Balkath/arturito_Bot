const Command = require("../Structures/Command");

module.export = new Command ({
    name: "ping",
    description: "Shows the ping of the bot!",


    async run(message, args, client) {

        message.reply(`Ping: ${client.ws.ping} ms.`)

    }

})