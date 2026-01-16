console.log('INICIANDO O BOT...');

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`🤖 Bot ligado como ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content === '!ping') {
    message.reply('Pong 🏓');
  }
});

client.login(process.env.DISCORD_TOKEN)
  .then(() => console.log('LOGIN ENVIADO AO DISCORD'))
  .catch(err => console.error(err));

