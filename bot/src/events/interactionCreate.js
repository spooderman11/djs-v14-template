/**
 * Handles the execution of Discord slash commands.
 *
 * This event listener is triggered whenever a user interacts with a slash command in the Discord client.
 * It retrieves the command object from the client's command registry, and then executes the command's `execute` method.
 * If an error occurs during command execution, a reply is sent to the user indicating that an error occurred.
 *
 * @param {import('discord.js').Interaction} interaction - The Discord interaction object representing the user's command interaction.
 */
module.exports = {
  name: "interactionCreate",
  async execute(interaction) {
    if (!interaction.isCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  },
};
