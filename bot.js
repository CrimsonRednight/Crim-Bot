const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");

// Event launch when Bot is Ready to work
bot.on("ready", () => {
   console.log("I am ready!");
});

bot.on("message", (message) => {   
	if (message.content.startsWith("hola")) {     
		message.channel.send("¡Hola ${member}!");   
	} 
});


// Event listening for new server members
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('General', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send("¡Bienvenid@ al servidor, ${member}, disfruta tu estancia!");
});

// Event listening for new channels
bot.on('channelCreate', (channel) => {
	// Send a message to the default channel when a channel is created
    channel.guild.defaultChannel.send("Se ha creado un nuevo canal: ${channel.name}");
})


bot.login(config.token);
