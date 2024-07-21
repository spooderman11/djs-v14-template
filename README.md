To get started with this bot, follow these steps:

1. **Clone the Repository**: Use Git to clone this repository to your local machine:
   git clone https://github.com/spooderman11/djs-v14-template.git your-repo-name
   cd your-repo-name

2. **Install Dependencies**: Navigate to the bot directory and run one of the following commands to install the necessary dependencies:

   For npm:
   npm install

   For yarn:
   yarn install

3. **Configure Environment Variables**: Copy the `.env` file template and fill in the necessary details:
   - `TOKEN`: Your Discord bot token.
   - `CLIENT_ID`: Your Discord application's client ID.
   - `GUILD_ID`: The ID of the guild (server) where you want to deploy the bot.
   - `MONGODB_URI`: The URI for connecting to your MongoDB database.
   - `OWNERS_IDS`: Comma-separated Discord user IDs of the bot's owners.

4. **Start the Bot**: You can start the bot in development mode using nodemon or directly with node:
   
   For npm:
   - Development mode with automatic restarts:
     npm run dev
   - Production mode:
     npm start

   For yarn:
   - Development mode with automatic restarts:
     yarn dev
   - Production mode:
     yarn run start

5. **Invite the Bot to Your Server**: Use the Discord Developer Portal to create an invite link with the necessary permissions and invite the bot to your server.

6. **Enjoy**: Your bot should now be up and running. Test it by using the commands you have set up.

## Extra Information

- **Contributing**: If you would like to contribute to this project, feel free to fork this repository and submit a pull request. Any contributions are welcome!

- **Issues**: If you encounter any issues or have suggestions for improvements, please create an issue on the GitHub repository.

- **using NPM instead of Yarn**: If you prefer to use npm, it might also be a good idea to delete the `yarn.lock` file and the `node_modules` directory before running `npm install`, so that everything is NPM compatible.

- **License**: This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

- **Acknowledgements**: This project was inspired by the [discord.js](https://discord.js.org/) library and the [discord.js guide](https://discordjs.guide/). Special thanks to the developers and contributors of these projects.

- **Support**: If you need any help or have any questions, feel free to reach out to me on Discord (faggotmuncher918) or create an issue on the GitHub repository.

Thank you for using this bot template! I hope you find it useful for creating your own Discord bots. Good luck with your project!
