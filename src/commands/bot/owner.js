const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `ARAAN SHEIKH`,
            inline: true,
        },
        {
            name: "🏷┆Discord username",
            value: `araan_sheikh`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `Clomel by TUMULL`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[https://aiarzz.com](https://corwindev.nl)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 
