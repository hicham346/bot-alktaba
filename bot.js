const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("614051062063824918")
setInterval(function() {
channel.send(`hicham is the pro player ever`);
}, 30)
})

client.login(process.env.BOT_TOKEN);