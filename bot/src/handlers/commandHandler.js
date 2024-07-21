/**
 * Handles the registration and synchronization of Discord application commands.
 * This module reads all command files from the `../commands` directory and its subdirectories,
 * registers them with the Discord API, and stores them in the client's `commands` collection.
 *
 * @param {Client} client - The Discord client instance.
 * @returns {Promise<void>} - A promise that resolves when the command synchronization is complete.
 */
const fs = require("fs");
const path = require("path");
const { REST, Routes } = require("discord.js");
const { print } = require("../utils/printer");

module.exports = async (client) => {
  const commands = [];
  const commandsDir = path.join(__dirname, "../commands");

  // Recursive function to read commands from directories and subdirectories
  const readCommands = (dir) => {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        // If the item is a directory, read its contents recursively
        readCommands(filePath);
      } else if (file.endsWith(".js")) {
        // If the item is a file, require it and add it to the commands collection
        const command = require(filePath);
        client.commands.set(command.data.name, command);
        commands.push(command.data.toJSON());
      }
    }
  };

  // Start reading commands from the base directory
  readCommands(commandsDir);

  const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

  try {
    print(
      `Started syncing ${commands.length} (command files) application (/) commands.`
    );

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    print("Application (/) commands synced successfully!");
  } catch (error) {
    print("Error occurred in commandHandler.js: ", error);
  }
};
