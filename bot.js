const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () =>{
    console.log ('TwitchBot is now live in your server!')
});

function commandIs(str, msg){
    return message.content.toLowerCase().startsWith("=" + str);
}

client.on('message', message => {
    var args= message.content.split(/[ ]+/);
    if (commandIs("hello")){
        message.channel.sendMessage('Hey there ' + message.author.username)
    }
    if (commandIs("twitch", message)){
        if(args.length === 1){
            message.channel.sendMessage("ERROR! Number undefined. Usage: `!twitch {update version number}`")
        } else if(args.length === 2){
            message.channel.sendMessage('Yo, yo, yo, what is up Twitch, lbd here, back with a brand new bot update number ' + args[1]);
        }else {
            message.channel.sendMessage("ERROR! Too many arguments. Usage: `!twitch {update version number}`")
        }
    }
if(command === "say"){
        if(args.length === 1){
            message.channel.sendMessage('ERROR! Argument not defined. Usage: !say {message}')
        }else{
            message.channel.sendMessage(args.join(" ").substring(5) )
        }
    }
})

client.login('MzAwNjQ4ODUzMzYxOTE3OTcz.C8vgoQ.YckZNvGQymqtjcGFVYGb1JOMRug')