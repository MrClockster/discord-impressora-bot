const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjI2NzgwMzI5NTcwNDY3ODQw.XZIIbQ.ZzZzjB0lQQ3aDYkFCmyXrvgdxeE';

bot.on('ready', () => 
{
    console.log('This bot is online!');
});

bot.on('message', message =>
{
    let args = message.content.split(" ");
    const desiremsg = args.find((arg) => 
        (arg.charAt(0) === 'i' || arg.charAt(0) === 'I') && 
        (arg.charAt(1) === 'm' || arg.charAt(1) === 'M') && 
        (arg.charAt(2) === 'p' || arg.charAt(2) === 'P') && 
        (arg.charAt(3) === 'r' || arg.charAt(3) === 'R'));
    if (desiremsg)
        message.channel.sendMessage('Sem papel');
}); 

bot.login(token);