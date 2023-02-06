module.exports = {
  deleted: true,
  name: 'ping',
  description: 'Pong!',
  // devOnly: Boolean,
  // testOnly: true,
  // options: Object[],
  

  callback: (client, interaction) => {
    interaction.reply(`Pong! ${client.ws.ping}ms`);
  },
};
