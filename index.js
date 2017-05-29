const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.token;

client.on("message", msg => {

  let prefix = "yo trev";

const start = new RegExp("^" + prefix, "i");
if(!msg.content.match(start)) return;

const foo = new RegExp("^" + prefix + " foo", "i");
const ping = new RegExp("^" + prefix + " ping", "i");
const archive = new RegExp("^" + prefix + " archive", "i");
const random = new RegExp("^" + prefix + " random", "i");

if (msg.content.match(ping)) {
  msg.channel.send("pong!");
}

else if (msg.content.match(foo)) {
  msg.channel.send("bar!");
}

else if (msg.content.match(archive)) {
  msg.channel.fetchMessages({limit: 3})
    .then(messages => console.log(messages.keys()))
    .catch(console.error);
}

else if (msg.content.match(random)) {
  msg.channel.fetchMessages({limit: 100})
    .then(messages => msg.channel.send(`Received ${messages.random()}`))
    .catch(console.error);
}

});

client.on('ready', () => {
  console.log('I am ready!');
});

client.login(token);
