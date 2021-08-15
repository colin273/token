const { Plugin } = require("powercord/entities");

module.exports = class Token extends Plugin {
  startPlugin() {
    powercord.api.commands.registerCommand({
      command: "token",
      description: "Get your Discord token via a command",
      usage: "{c}",
      executor: async (args) => {
        // get the user stats
        try {
            const token = localStorage.getItem('token')

            if (!token) {
                return {
                    send: false,
                    result: "Whoops! We couldn\'t find your token",
                    }
                        }

            return {
                send: false,
                result: `Here\'s your token: ||` + token + `||\n**DO NOT SEND THIS TO ANYONE**`
                    };
        } catch (e) {
          return {
            send: false,
            result: `Error: ${e}`
          };
        }
      },
    });
  }

  pluginWillUnload() {
    powercord.api.commands.unregisterCommand("Token");
  }
}
