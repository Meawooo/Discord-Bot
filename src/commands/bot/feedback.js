const Discord = require('discord.js');

const webhookClient = new Discord.WebhookClient({
    id: "1218256053725298708",
    token: "KczOZ9b8eewhki1pm57gyPB9fOprVU1xJV-oHaEC5ppi0tIZ8BAcGdCigBOeGXnTX4ei",
});

module.exports = async (client, interaction, args) => {
    const feedback = interaction.options.getString('feedback');

    const embed = new Discord.EmbedBuilder()
        .setTitle(`📝・New feedback!`)
        .addFields(
            { name: "User", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
        )
        .setDescription(`${feedback}`)
        .setColor(client.config.colors.normal)
    webhookClient.send({
        username: 'Bot Feedback',
        embeds: [embed],
    });

    client.succNormal({ 
        text: `Feedback successfully sent to the developers`,
        type: 'editreply'
    }, interaction);
}

 
