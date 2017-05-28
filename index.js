var Discord = require("discord.js");
var client = new Discord.Client();
var token = process.env.token;

client.on("message", msg => {

  let prefix = "yo trev";

var start = new RegExp("^" + prefix, "i");
if(!msg.content.match(start)) return;

var foo = new RegExp("^" + prefix + " foo", "i");
var ping = new RegExp("^" + prefix + " ping", "i");

if (msg.content.match(ping)) {
  msg.channel.sendMessage("pong!");
}

else if (msg.content.match(foo)) {
  msg.channel.sendMessage("bar!");
}
});

client.on('ready', () => {
  console.log('I am ready!');
});

client.login(token);
