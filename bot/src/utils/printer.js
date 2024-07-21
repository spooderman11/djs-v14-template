function print(content) {
  const timestamp = new Date().toLocaleTimeString("en-US", { hour12: false });
  console.log(`[BOT] [${timestamp}] -> ${content}`);
}

module.exports = { print };
