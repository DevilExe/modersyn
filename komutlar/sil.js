const Discord = require('discord.js');

exports.run = function(client, message, args) {
    let bs = args.slice(0).join('+');
  
  let id = Number(args[0]);
  

   
    if(isNaN(id)) return message.channel.send(new Discord.RichEmbed().addField(`Hatalı Kullanım` , `Lütfen Silinecek Mesaj Sayısını Yazınız Örnek: __**e!temizle 10**__`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(10000));
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.RichEmbed().addField(`Yetersiz Yetki` , `Bu Komutu Kullanabilmek  için "Mesajları Yönet" Yetkisine Sahip Olmalısınız`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(10000));
if(!args[0]) return message.channel.send(new Discord.RichEmbed().addField(`Hatalı Kullanım` , `Lütfen Silinecek Mesaj Sayısını Yazınız`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(10000));
message.channel.bulkDelete(args[0]).then(() => {
 message.channel.send(new Discord.RichEmbed().addField(`İşlem Başarılı` , `${args[0]} Adet Mesaj Silindi`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(5000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil','temizle',"mesajsil"],
  permLevel: 3
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};