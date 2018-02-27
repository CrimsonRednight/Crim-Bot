var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!' && user != 'Crim-Bot') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
			// Comando que responde el saludo al bot
			case 'hola':
                bot.sendMessage({
                    to: channelID,
                    message: '¡Hola @'+user+'!'
                });
            break;
			// Comando que muestra el sentido de la vida
			case 'vida':
                bot.sendMessage({
                    to: channelID,
                    message: '¡Todo el mundo sabe que el sentido de la vida es 42!'
                });
            break;
			// Comando que muestra la ayuda del bot
			case 'ayuda':
                bot.sendMessage({
                    to: channelID,
					message: '```ayuda -> ¿Por qué preguntas si lo estas usando? \n'
					+'hola -> Reproduce un saludo a tu usuario! \n'
					+'vida -> Reproduce el sentido de la vida! ```'
                });
            break;
           
         }
     }
});
