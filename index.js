require('dotenv').config();

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log("🌌 Lumenfall System is awake...");
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  const text = message.content.toLowerCase();

  if (text.includes("wake up")) {
    message.reply("…The world stirs. Lumenfall acknowledges your presence.");
  }

  if (text.includes("hello")) {
    message.reply("A silence answers you first… then Lumenfall responds.");
  }
});

client.login(process.env.DISCORD_TOKEN);
