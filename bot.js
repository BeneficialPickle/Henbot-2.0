var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {//added the keyword new, July 30th 2018
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
    if (message.substring(0, 1) == '%') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'cluck'://the command
                const quotes = [":OMEGALUL:", ":OMEGAREE:", "I DON'T KNOW, EAT MY ASS", "Can I get a poggers in the chat please", "I love Keane", "smh"];
                var quote = Math.floor(Math.random() * quotes.length);
                switch(quotes[quote]) {
                    default:
                        bot.sendMessage({
                            to: channelID,
                            message: quotes[quote]
                        });
                        break;
                }
            	break;

            /*case 'pic':
            	const pics = [
            		'https://cdn.discordapp.com/attachments/478286921962094603/478287104682754049/bruh.PNG',
            		'https://cdn.discordapp.com/attachments/478286921962094603/478287107144810506/facepalm.PNG',
            		'https://cdn.discordapp.com/attachments/478286921962094603/478287109489426435/fish.jpg',
            		'https://cdn.discordapp.com/attachments/478286921962094603/478287129714360320/hen.jpg',
            		'https://cdn.discordapp.com/attachments/478286921962094603/478287130712342553/henREE.jpg',
            		'https://cdn.discordapp.com/attachments/478286921962094603/478287130846691338/hen.PNG',
            	]
            	var pic = Math.floor(Math.random() * pics.length);
            	bot.sendFile({file: pics[pic]});
            break;*/
            // Just add any case commands if you want to..
         }
     }
});