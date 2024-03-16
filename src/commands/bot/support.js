const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    let row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
                .setLabel("Support server")
                .setURL(client.config.discord.serverInvite)
                .setStyle(Discord.ButtonStyle.Link),
        );

    client.embed({
        title: `❓・Support`,
        desc: `Make your server even better with Bot!`,
        image: "https://cdn.discordapp.com/attachments/875968296556572722/1218412249564184726/clomel.gif?ex=660791d5&is=65f51cd5&hm=d9c1e7ba3b6960c48c3fe0c68acb7ed319b0ae069d608998d9f4e154885bb4e2&",
        url: client.config.discord.serverInvite,
        components: [row],
        type: 'editreply'
    }, interaction)
}

 
