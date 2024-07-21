/**
 * Example command file for a "ping" slash command.
 * Executes the "ping" slash command, which checks the bot's latency.
 *
 * @param {import('discord.js').CommandInteraction} interaction - The command interaction object.
 * @returns {Promise<void>} - A Promise that resolves when the command has been executed.
 * This command builds an embed with the bot's latency and API latency, then sends it to the interaction channel.
 */
const { SlashCommandBuilder, Colors } = require("discord.js");
const { EmbedConstructor } = require("../../constructors/embedConstructor");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Checks the bot's latency."),
  /**
   * @param {import('discord.js').CommandInteraction} interaction
   */
  async execute(interaction) {
    const sent = await interaction.deferReply({ fetchReply: true });
    const latency = sent.createdTimestamp - interaction.createdTimestamp;

    const embed = new EmbedConstructor({
      desc: `Pong! 🏓\nLatency: ${latency}ms\nAPI Latency: ${Math.round(
        interaction.client.ws.ping
      )}ms`,
      color: Colors.Blue,
    }).build();

    await interaction.editReply({ embeds: [embed] });
  },
};
