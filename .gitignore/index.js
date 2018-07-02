const Discord = require('discord.js');
const clientDiscord = new Discord.Client();


clientDiscord.on('ready', ()=> {
	clientDiscord.user.setPresence({ game: { name: '!cmd', type: 0}});
});

clientDiscord.login(process.env.TOKEN);

	clientDiscord.on('message', message => {
  
    
  
  });
