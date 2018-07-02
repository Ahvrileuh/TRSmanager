const Discord = require('discord.js');
const clientDiscord = new Discord.Client();

var prefix = "";
var role = "";

clientDiscord.on('ready', ()=> {
	clientDiscord.user.setPresence({ game: { name: '!cmd', type: 0}});
});

clientDiscord.login(process.env.TOKEN);

	clientDiscord.on('message', message => {
  	
		const guildMember = message.member;
    		
  		if(message.content === prefix + "add unity " && message.channel.name == 'roles-manager'){
			role = message.guild.roles.find('name', 'UNITY');
			guildMember.addRole(role);
			message.channel.send("role **UNITY** added !");
		}
  });
