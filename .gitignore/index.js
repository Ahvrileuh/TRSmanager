const Discord = require('discord.js');
const clientDiscord = new Discord.Client();

var prefix = "!";
var role = "";

clientDiscord.on('ready', ()=> {
    clientDiscord.user.setPresence({ game: { name: '=> roles-manager', type: 0}});
    console.log("JOSSE is ready");
});

clientDiscord.login(process.env.TOKEN);

	clientDiscord.on('message', message => {
  	
		const guildMember = message.member;
    		
  		if(message.content === prefix + "add unity" && message.channel.name == 'roles-manager'){
			role = message.guild.roles.find('name', 'UNITY');
			guildMember.addRole(role);
			message.channel.send("role **UNITY** added !");
		}
		
		if(message.content === prefix + "add ur4" && message.channel.name == 'roles-manager'){
			role = message.guild.roles.find('name', 'UR4');
			guildMember.addRole(role);
			message.channel.send("role **UR4** added !");
		}
		
		if(message.content === prefix + "add c" && message.channel.name == 'roles-manager'){
			role = message.guild.roles.find('name', 'C');
			guildMember.addRole(role);
			message.channel.send("role **C** added !");
		}
		
		if(message.content === prefix + "add c#" && message.channel.name == 'roles-manager'){
			role = message.guild.roles.find('name', 'C#');
			guildMember.addRole(role);
			message.channel.send("role **C#** added !");
		}
		
		if(message.content === prefix + "add js" && message.channel.name == 'roles-manager'){
			role = message.guild.roles.find('name', 'JavaScript');
			guildMember.addRole(role);
			message.channel.send("role **JAVASCRIPT** added !");
		}
		
		if(message.content === prefix + "add cake" && message.channel.name == 'roles-manager'){
			role = message.guild.roles.find('name', 'just a cake...');
			guildMember.addRole(role);
			message.channel.send("role **cake** added !");
		}
		
		if(message.content === prefix + "add c++" && message.channel.name == 'roles-manager'){
			role = message.guild.roles.find('name', 'C++');
			guildMember.addRole(role);
			message.channel.send("role **C++** added !");
		}
  });
