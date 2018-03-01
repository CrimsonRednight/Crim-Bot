// Include the required elements
const Discord = require("discord.js");
const config = require("./config.json");

const bot = new Discord.Client();

// Event launch when Bot is Ready to work
bot.on("ready", () => {
	
   console.log("Crim-Bot ready to work!");
   
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
	
	// Check for the default channel "general"
	var defaultChan = channel.guild.channels.find('name', 'general');
	
	// Send a message to the default channel when a channel is create
    defaultChan.send(`Se ha creado un nuevo canal: ${channel} `);
	
})


//Event listening for new messages mentioning bot
bot.on("message", (message) => {   

	// Bot ignores himself and other bots, avoid loops
	if(message.author.bot) return;

	// Check Bot is mentioned on the message
	if (message.isMentioned(bot.user)) {
		
		// Transform message to lowercase to easily check words
		var text = message.content.toLowerCase();
		
		// Bot responds to "hola"
		if (text.includes("hola")){     
			message.channel.send(`Hola ${message.member}`);   
		} 
		
		// Bot responds to "yonki"
		if (text.includes("yonki")) {
			message.channel.send(`El único Yonki aquí eres tu ${message.member}`); 
		}
		
		// Bot responds to "ayuda"
		if (text.includes("ayuda")) {
			message.channel.send(`
			Aquí tienes la lista de comandos, responderé a cada palabra que menciones en tu comentario:
			-hola: Te respondo con un saludo
			-yonki: Te respondo devolviendote el insulto
			-ayuda: ¿De verdad quieres que te responda?
			-tutoriales: Te daré un enlace al canal de CrimsonRednight
			`);
		}
		
		// Bot responds to "tutoriales"
		if (text.includes("tutoriales")) {
			message.channel.send(`${message.member}, te aconsejo echar un vistazo a: https://www.youtube.es/user/CrimsonRednight`); 
		}
		
	}

});


bot.login(config.token);
