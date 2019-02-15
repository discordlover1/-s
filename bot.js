const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login("NTQ2MDI1MjkyOTc2NzUwNjAz.D0iNZA.w5XI-qTvjmn8x7I_7nQtemiqvVk");









var prefix = ('.')
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
		 message.channel.send('**The Message Was Sent On Private**');





 message.author.sendMessage(`
 **
__~~The King Bot~~__ 
╱╭╮╭╮╱╱╱╱╭╮╭━╮╱╱╱╱╱╱╭━━╮╱╱╱╭╮
╭╯╰┫┃╱╱╱╱┃┃┃╭╯╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╰╮╭┫╰━┳━━┫╰╯╯╭┳━╮╭━━┫╰╯╰┳━┻╮╭╯
╱┃┃┃╭╮┃┃━┫╭╮┃┣┫╭╮┫╭╮┃╭━╮┃╭╮┃┃
╱┃╰┫┃┃┃┃━┫┃┃╰┫┃┃┃┃╰╯┃╰━╯┃╰╯┃╰╮
╱╰━┻╯╰┻━━┻╯╰━┻┻╯╰┻━╮┣━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰━━╯
╔[❖════════════❖]╗
             Prefix = ' . '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
             Admin Commands
╚[❖════════════❖]╝

 ❖ .bc1 ➾ send brodcast to all with embed

 ❖ .bc2 ➾ send brodcast to online members

 ❖ .bc3 ➾ send brodcast react embed or no


╔[❖════════════❖]╗
            General  Commands
╚[❖════════════❖]╝

❖ .invite ➾ invite the bot


╔[❖════════════❖]╗
                    invite link
╚[❖════════════❖]╝


==================================================================

bot invite link: https://discordapp.com/api/oauth2/authorize?client_id=546025292976750603&permissions=0&scope=bot

==================================================================

`);

    }
});









var prefix = ('.')
client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc1') {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});









var prefix = ('.')
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc2")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`);
 message.delete();
};
});











client.on('message', message => {
              if(!message.channel.guild) return;
    var prefix = ".";
    if(message.content.startsWith(prefix + 'bc3')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "alpha codes";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('```**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**```');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });










    client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
    });
             client.on('message', message => {
                if (message.content === 'السلام عليكم') {
                  message.channel.send('**وعليكم السلام**');
                  message.channel.sendFile("./photoshop.PNG");


                }
    });










    client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
    });
             client.on('message', message => {
                if (message.content === '+invite') {
                  message.channel.send('**رابط بوتك**');
                  message.channel.sendFile("./photoshop.PNG");


                }
    });










    client.on('message', message => {
             if (message.content === ".helpset") {
             let embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .addField('     **+leave** ' , '**لخروج البوت من السيرفر**')
        .addField('     **+sets** ' , '**streaming**')
        .addField('     **+setw** ' , '**watching**')
        .addField('     **+set1** ' , '**listening**')
        .addField('     **+setg** ' , '**playing**')
        .addField('     **+setname** ' , '**change the name**')
        .addField('     **+setavatar** ' , '**change the avatar**')
        .setColor('RANDOM')
          message.channel.sendEmbed(embed);
            }
    });










    var prefix = ".";
    var adminprefix = '.'
    const developers = ["ايديك"]
    client.on('message', message => {
        var argresult = message.content.split(` `).slice(1).join(' ');
          if (!developers.includes(message.author.id)) return;

      if (message.content.startsWith(adminprefix + 'setg')) {
        client.user.setGame(argresult);
          message.channel.send(`تم التغيير   ${argresult}**`)
      } else
         if (message.content === (adminprefix + "leave")) {
        message.guild.leave();
      } else
      if (message.content.startsWith(adminprefix + 'setw')) {
      client.user.setActivity(argresult, {type:'WATCHING'});
          message.channel.send(`تم التغيير   ${argresult}**`)
      } else
      if (message.content.startsWith(adminprefix + 'setl')) {
      client.user.setActivity(argresult , {type:'LISTENING'});
          message.channel.send(`تم التغيير   ${argresult}**`)
      } else
      if (message.content.startsWith(adminprefix + 'sets')) {
        client.user.setGame(argresult, "https://www.twitch.tv/One");
          message.channel.send(`تم التغيير`)
      }
      if (message.content.startsWith(adminprefix + 'setname')) {
      client.user.setUsername(argresult).then
          message.channel.send(`Changing The Name To ..**${argresult}** `)
    } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {
      client.user.setAvatar(argresult);
        message.channel.send(`Changing The Avatar To :**${argresult}** `);
    }
    });
