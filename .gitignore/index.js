const Discord = require('discord.js');
const clientDiscord = new Discord.Client();

var prefix = "!";
var role = "";
var Dice = 0;

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
		
		if(message.content === prefix + "soul" && message.channel.name == 'bot-cmd'){
			random();
			if(Dice <= 15){
			message.channel.send("You get a **legendary** soul !");
			}
			if(Dice >= 15 && Dice <= 20){
			message.channel.send("You get a **super-legendary** soul !");
			}
			if(Dice > 20){
			message.channel.send("You get a **normal** soul !");
			}
		}
  });

  clientDiscord.on('guildMemberAdd', member => {
		
		role = member.guild.roles.find('name','LittleForm');
		member.addRole(role);
  });

function random(min, max){
	min = Math.ceil(1);
	max = Math.floor(100);
	Dice = Math.floor(Math.random() * (max - min + 1) + min);
	console.log("dice(6) try !");
}
