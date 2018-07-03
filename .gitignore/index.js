const Discord = require('discord.js');
const clientDiscord = new Discord.Client();

var prefix = "!";
var role = "";

clientDiscord.on('ready', ()=> {
    clientDiscord.user.setPresence({ game: { name: '> roles-manager', type: 0}});
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
		
		if(message.content === prefix + "add news" && message.channel.name == 'roles-manager'){
			role = message.guild.roles.find('name', 'news');
			guildMember.addRole(role);
			message.channel.send("role **NEWS** added !");
		}
		
		if(message.content === prefix + "remove role" && message.channel.name == 'roles-manager'){
			role = message.guild.roles.find('name', 'UNITY');
			guildMember.removeRole(role);
			role = message.guild.roles.find('name', 'UR4');
			guildMember.removeRole(role);
			role = message.guild.roles.find('name', 'C');
			guildMember.removeRole(role);
			role = message.guild.roles.find('name', 'C#');
			guildMember.removeRole(role);
			role = message.guild.roles.find('name', 'C++');
			guildMember.removeRole(role);
			role = message.guild.roles.find('name', 'JavaScript');
			guildMember.removeRole(role);
			role = message.guild.roles.find('name', 'just a cake...');
			guildMember.removeRole(role);
			role = message.guild.roles.find('name', 'news');
			guildMember.removeRole(role);
			message.channel.send("role removed !");
		}
  });

  	clientDiscord.on('guildMemberAdd', member => {
		
		role = member.guild.roles.find('name','LittleForm');
		member.addRole(role);
		member.createDM.send("**Welcome to the TRSgameserver !** you can ask all your questions and I can (Thibaud.S) send you any drawing or C# code of my games ! just ask me ^^")
	});
