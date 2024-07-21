/**
 * Loads and registers all event handlers for the Discord client.
 *
 * This function reads all files in the `../events` directory and registers the corresponding event handlers with the provided Discord client. If an event handler is marked as `once`, it will be registered using `client.once()`, otherwise it will be registered using `client.on()`.
 *
 * @param {object} client - The Discord client to register the event handlers with.
 */
const fs = require("fs");
const path = require("path");

module.exports = (client) => {
  const eventsDir = path.join(__dirname, "../events");
  fs.readdirSync(eventsDir).forEach((file) => {
    const event = require(`${eventsDir}/${file}`);
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args));
    } else {
      client.on(event.name, (...args) => event.execute(...args));
    }
  });
};
