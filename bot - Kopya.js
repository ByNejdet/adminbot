const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json')

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`ADMİN BOT HAZIR KİM BANLANICAK ${client.user.tag}!`);
});

client.on('message', msg => {
  console.log(`LOG: S: ${msg.guild.name} M: ${msg.content} Y: ${msg.author.tag}`);
  if (msg.author.id === ayarlar.id) return;
  if (msg.author.bot) return;

  if (!msg.content.startsWith(prefix)) {
	  return;
}
  if (msg.content === prefix + 'ping') {
    msg.channel.sendMessage('pingim! **' + client.ping + '** ms' );
  }
  if (msg.content.toLowerCase() === prefix + 'temizle') {
     msg.delete();
     msg.channel.bulkDelete(100);
     msg.channel.sendMessage("100 adet mesaj silindi!");
   }
   if (msg.content.toLowerCase() === prefix + 'reboot') {
   if (msg.author.id !== ayarlar.sahip) {
     msg.reply('Benim yapımcım değilsin!');
   } else {
     msg.reply(`Bot yeniden başlatılıyor...`).then(msg => {
     console.log(`BOT: Bot yeniden başlatılıyor...`);
     process.exit(0);
   })
  }
 }
});

client.login(ayarlar.token);
