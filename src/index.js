console.clear()

const Client = require("./Structures/Client.js");

const Command = require("./Structures/Command.js");

const config = require("./Data/config.json");

const client = new Client();

const fs = require("fs");

fs.readdirSync("./src/Commands")
    .filter(file => file.endsWith("js"))
    .forEach( file => {
        /**
         * @type {Command}
         */

        const command = require(`./Commands/${file}`);
        console.log(`Command ${command.name} loaded`);
        client.commands.set(command.name, command);

});

const botName = "Arturito"

client.on("ready", () => {
    console.log(`Beep Boop Beep, ${botName} is online`)
});

client.on("messageCreate", async msg => {
    if (!msg.content.startsWith(config.prefix)) return;

    const args = msg.content.substring(config.prefix.length).split(/ +/);


    /* switch(args[0]) {
        case "hello":

            msg.reply("Hello there!");

        case "say":
            msg.reply(args.slice(1).join(" "));

            break;
    } */

});

client.login(config.token);