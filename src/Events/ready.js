const Event  = require("../Structures/Event");

module.exports = new Event("ready",  () => {
    const botName = "Arturito"
    console.log(`Beep Boop Beep, ${botName} is online`)

});