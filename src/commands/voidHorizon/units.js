const { ApplicationCommandOptionType, EmbedBuilder } = require("discord.js");
const fs = require('node:fs');
const Papa = require('papaparse');
const csvStringUnit = fs.readFileSync('src/csv/unitsAndKeywords.csv', { encoding: 'utf-8' });
const { data } = Papa.parse(csvStringUnit, { header: true});
const { EmbededBuilder } = require('discord.js')

const keywords = data.slice(6).map(row => row.Keyword.toLowerCase());
const keywordCommands = keywords.map(keywords => {
    return {
        name: keywords.replaceAll(' ','-').toLowerCase(),
        description: 'Keyword Definition',
        type: ApplicationCommandOptionType.Subcommand,
    }
}); 


const keywords1 = keywordCommands.slice(0,25);
const keywords2 = keywordCommands.slice(25,50);
const keywords3 = keywordCommands.slice(50);

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
                    name: 'light-armored-vehicle',
                    description: 'Light Armored Vehicle Base Stats',
                    type: ApplicationCommandOptionType.Subcommand,
                },
                {
                    name: 'heavy-armored-vehicle',
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
        {
            name: 'keyword1',
            description: 'Keyword SubGroup 1',
            type: ApplicationCommandOptionType.SubcommandGroup,
            options: keywords1,
            
        },
        {
            name: 'keyword2',
            description: 'Keyword SubGroup 2',
            type: ApplicationCommandOptionType.SubcommandGroup,
            options: keywords2,
            
        },
        {
            name: 'keyword3',
            description: 'Keyword SubGroup 3',
            type: ApplicationCommandOptionType.SubcommandGroup,
            options: keywords3,
            
        },
    ],

    callback: (client, interaction) => {

        const unitName = interaction.options.getSubcommand();
        const kwCommand = interaction.options.getSubcommand();

        const unit = data.find(row => row.Unit.toLowerCase().replaceAll(' ','-') === unitName);
        const kw =data.find(row => row.Keyword.toLowerCase().replaceAll(' ',"-") === kwCommand);
        if(interaction.options.getSubcommandGroup() === 'unit') {
            interaction.reply({embeds: [new EmbedBuilder()
                .setTitle(unit.Unit)
                .setDescription(`${unit.Unit} Base Stats`)
                .addFields(
                   {
                       name: 'Points',
                       value: unit.Points.toString(),
                       inline: true,
   
                   },
                   {
                       name: 'Move',
                       value: unit.Move.toString(),
                       inline: true,
                   },
                   {
                       name: 'Combat',
                       value: unit.Combat.toString(),
                       inline: true,
                   },
                   {
                       name: 'Defense',
                       value: unit.Defense.toString(),
                       inline: true,
                   },
                   {
                       name: 'Morale',
                       value: unit.Morale.toString(),
                       inline: true,
                   },
                   {
                       name: 'Range',
                       value: unit.Range.toString(),
                       inline: true,
                   },
   
                )
               
           ]});
        } else {interaction.reply({embeds: [new EmbedBuilder()
                    .setTitle(kw.Keyword)
                    .addFields(
                        {
                            name: 'Points',
                            value: kw.Points.toString(),
                            inline: true,
    
                        },
                        {
                            name: 'Definition',
                            value: kw.Description.toString(),
                            inline: true,
                        },
                    )
                ]});    
            }   

        
            
    
    }   
};
  