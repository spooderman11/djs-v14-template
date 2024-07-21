/**
 * This is the main entry point for the Discord bot application. It sets up the Discord client, loads command and event handlers, connects to the MongoDB database, and ensures the bot configuration is present in the database. Finally, it logs the bot into the Discord API.
 */

// flushing console, for better readbility if nodemon is used
console.clear();

require("dotenv").config();
const { Client, GatewayIntentBits, Collection } = require("discord.js");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const botconfig = require("./models/botconfig");
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

// make sure the bot config is in the database
botconfig.findOne({}).then((result) => {
  if (!result) {
    new botconfig().save();
  }
});

client.login(process.env.TOKEN);
