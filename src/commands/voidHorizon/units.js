const { ApplicationCommandOptionType, EmbedBuilder } = require("discord.js");
const fs = require('node:fs');
const Papa = require('papaparse');
const csvString = fs.readFileSync('src/csv/units.csv', { encoding: 'utf-8' });
const { data } = Papa.parse(csvString);
const { EmbededBuilder } = require('discord.js')


// const optionNames = data
//     .slice(1)
//     .map((row) => row[0])
//     .map((name) => name.toLowerCase().replace(' ', '-'));

const titleNames = data[0];

console.log(titleNames);

module.exports = {
    name: 'vh',
    description: 'Rules and Unit lookup for Void Horizon',
    options: [
        {
            name: 'unit',
            description: 'Units SubGroup',
            type: ApplicationCommandOptionType.SubcommandGroup,
            options: [
                {
                    name: 'rabble',
                    description: 'Rabble Base Stats',
                    type: ApplicationCommandOptionType.Subcommand,
                },
                {
                    name: 'light-infantry',
                    description: 'Light Infantry Base Stats',
                    type: ApplicationCommandOptionType.Subcommand,
                },
                {
                    name: 'heavy-infantry',
                    description: 'Heavy Infantry Base Stats',
                    type: ApplicationCommandOptionType.Subcommand,
                },
                {
                    name: 'lav',
                    description: 'Light Armored Vehicle Base Stats',
                    type: ApplicationCommandOptionType.Subcommand,
                },
                {
                    name: 'hav',
                    description: 'Heavy Armored Vehicle Base Stats',
                    type: ApplicationCommandOptionType.Subcommand,
                },
                {
                    name: 'war-behemoth',
                    description: 'War Behemoth Base Stats',
                    type: ApplicationCommandOptionType.Subcommand,
                },

            ],

        },
    ],

    callback: (client, interaction) => {
        interaction.reply({embeds: [new EmbedBuilder()
             .setTitle(interaction.options.getSubcommand('units'))
             .setDescription(interaction.options.get('value'))
             .addFields(
                {
                    name: 'Points',
                    value: '1',
                    inline: true,

                },
                {
                    name: 'Move',
                    value: '1',
                    inline: true,
                },
                {
                    name: 'Combat',
                    value: '1',
                    inline: true,
                },
                {
                    name: 'Defense',
                    value: '1',
                    inline: true,
                },
                {
                    name: 'Morale',
                    value: '1',
                    inline: true,
                },
                {
                    name: 'Range',
                    value: '1',
                    inline: true,
                },

             )
            
        ]});
    }   
};
  