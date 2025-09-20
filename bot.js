const mineflayer = require("mineflayer");

function createBot() {
  const bot = mineflayer.createBot({
    host: "your-aternos-server.aternos.me", // change to your server IP
    port: 25565,
    username: "AFK_Bot" // If cracked, this works. If premium, put email here.
  });

  bot.on("spawn", () => console.log("Bot joined and keeping server alive!"));

  bot.on("end", () => {
    console.log("Bot disconnected! Reconnecting...");
    setTimeout(createBot, 5000);
  });

  bot.on("error", err => console.log("Bot error:", err));
}

createBot();
