const Discord = require('discord.js')
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN)

client.on('ready', () => {
    client.user.setGame('hey use ;dailymeme');
});

client.on('message', msg => {
    if (msg.content == ';order') {
        order = true;
        msg.reply('What kind of order are you looking to make? Please choose from **plan** or **custom** order.');
        return;
    }
    else if (msg.content == 'plan') {
        if (order == true) {
            message.author.sendMessage("Please look at http://goo.gl/forms/oM3Y62VPhZOwYLTq2 to request a server plan.");
            order = false;
            return;
        }
        else {
            order = false; // This happens if another person says something before you can write plan or custom so, i can keep it or remove it, but i will keep it because they can exit the ;order by saying something unrelated to an option
            return;
        }
    }
    else if (msg.content == 'custom') {
        if (order == true) {
            msg.reply('Please look at #request-a-custom-server.'); // I don't want this to send in DMs
            order = false;
            return;
        }
        else {
            order = false; // Maybe don't have this? idk
            return;
        }
    }
    else if (msg.content == ';order custom') {
        msg.reply('Please look at #request-a-custom-server');
        return;
    }
    else if (msg.content == ';order plan') {
        message.author.sendMessage("Please look at http://goo.gl/forms/oM3Y62VPhZOwYLTq2 to request a server plan.");
        return;
    }
    else if (msg.content == ';help') {
        msg.reply('Here is a list of commands.\n**;help** - View commands\n**;order** - Order a server\n**;readme** - View the readme\n**;dailymeme** - Updated every day with a new meme\n**;fortnite** - Add the argument version to find the current version, and add the argument advert *(Advert is currently dead cause of a bug)* to advertise your game.');
        return;
    }
    else if (msg.content == ';dailymeme') {
        msg.reply('Daily Meme Time! https://cdn.discordapp.com/attachments/471018880525926410/471018938302595092/635a5ef2e71e45cbb536b0633baa2bb711147d089b651e4922eb89a79ae1eaf6_1.jpg');
        return;
    }
    else if (msg.content == ';readme') {
        msg.reply('README Contents:\n **Cratefield**\n-----------------------\nCratefield is a bot for the server Cratefield Premade\nBuy custom made discord servers today!\n**News:**\nThe bot will flicker offline and online when im updating it.\n~The bot is currently down rn cause~ my github account is "FLAGGED" lol ok but why *(Doesnt shut down the bot, but my discord is now private. $7 per month fee for free!)*');
        return;
    }
    else if (msg.content == ';fortnite') {
        msg.reply('Please look at ;help for possible arguments');
        return;
    }
    else if (msg.content == ';fortnite version') {
        msg.reply('Fortnite is current v5.0, and will be updated to v5.1 at 4:00 A.M. EST 7/23/18');
        return;
    }
    // else if (msg.content == ';fortnite advert') {
    //     msg.reply(`${client.user} is playing fortnite! Message them to play!`); // sends @Cratefield is playing fortnite, so i disabled it for now
    //     return;
    // }
    return;
});