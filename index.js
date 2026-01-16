console.log('INICIANDO O BOT...');

const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Rota simples só pra dizer "estou vivo"
app.get('/', (req, res) => {
  res.send('Bot do Discord está online 🚀');
});

// Servidor HTTP (necessário pro Render Free)
app.listen(PORT, () => {
  console.log(`Servidor web rodando na porta ${PORT}`);
});

// ================= DISCORD BOT =================

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


