/**
 * Handles the "ready" event for the Discord bot, which is emitted when the bot is logged in and ready to receive commands.
 * This event listener logs the bot's username and the number of servers and members it is currently serving.
 * It can also be used to set the bot's activity or perform other initialization tasks.
 *
 * @param {import("discord.js").Client} client - The Discord client instance.
 */
const { ActivityType } = require("discord.js");
const { print } = require("../utils/printer");

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    print(
      `Logged in as ${client.user.tag}. Currently Serving ${
        client.guilds.cache.size
      } server(s), with ${client.guilds.cache.reduce(
        (a, b) => a + b.memberCount,
        0
      )} members`
    );
    // do things here like set the bot's activity, etc.
  },
};
