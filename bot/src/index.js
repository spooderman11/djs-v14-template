/**
 * The main entry point for the Discord bot application.
 * This file sets up the Discord client, loads command and event handlers, connects to MongoDB, and logs the bot into Discord.
 */
// flushing console, for better readbility if nodemon is used
console.clear();

require("dotenv").config();
const { Client, GatewayIntentBits, Collection } = require("discord.js");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const { print } = require("./utils/printer");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
  ],
});
client.commands = new Collection();

// Load command and event handlers
print("Loading command and event handlers...");
const handlersDir = path.join(__dirname, "handlers");
fs.readdirSync(handlersDir).forEach((handler) => {
  require(`${handlersDir}/${handler}`)(client);
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => print("Connected to MongoDB"))
  .catch((err) => print(`Error connecting to MongoDB: ${err}`));

// this line was a bot config check, removed since it's a template. If needed, uncomment and replace with your own check
// botconfig.findOne({}).then((result) => {
//   if (!result) {
//     new botconfig().save();
//   }
// });

client.login(process.env.TOKEN);
