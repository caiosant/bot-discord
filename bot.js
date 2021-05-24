const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`); 
    client.user.setPresence({ game: { name: 'comando', type: 1, url: 'https://www.twitch.tv/ticaofps'} });
      //0 = Jogando
      //  1 = Transmitindo
      //  2 = Ouvindo
      //  3 = Assistindo
});


client.login(config.token);