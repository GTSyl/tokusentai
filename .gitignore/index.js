const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login('your-token-goes-here');
client.on('message', message => {
	if (message.content === '!pingpong') {
	message.channel.send('Pong.');
}
});
