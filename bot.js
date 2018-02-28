const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");

// Event launch when Bot is Ready to work
bot.on("ready", () => {
   console.log("I am ready!");
});

bot.on("message", (message) => {   
	if (message.content.includes("hola") && message.isMentioned(bot.user)){     
		message.channel.send(`Hola ${message.member}`);   
	} 
});


// Event listening for new server members
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('general', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Bienvenid@ al servidor, ${member}, disfruta tu estancia!`);
});

// Event listening for new channels
bot.on('channelCreate', (channel) => {
	var defaultChan = channel.guild.channels.find('name', 'general');
	// Send a message to the default channel when a channel is create
        defaultChan.send(`Se ha creado un nuevo canal: ${channel} `);
})


bot.login(config.token);
