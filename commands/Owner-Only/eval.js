const { Client, Message, MessageEmbed } = require('discord.js'),
  { post } = require('node-superfetch');
  const config = require('../../config.json')
module.exports = {
    name: 'eval',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
      if (message.author.id !== "YOUR_ID") return;
      const embed = new MessageEmbed()
      .addField("Input", "```js\n" + args.join(" ") + "```");

      try {
        const code = args.join(" ")
        if(!code) return message.channel.send("Hypster noob give me the code ");
        let evaled;
        if (code.includes(`lol`) || code.includes(`lmao`) || code.includes("process.env")) {
        evaled = "no"
        } else {
          evaled = eval(code);

        }

        if (typeof evaled !== "string") eval = require("util").inspect(evaled, {depth: 0})

        let output = clean(evaled)
        if (output.length > 1024) {
          const {body} = await post("https://hastebin.com/documents").send(output);
          embed.addField("Output", `https://hastebin.com/${body.key}.js`).setColor(0x7289DA)
        } else {
          embed.addField("Output", "```js\n" + output + "```").setColor(0x7289DA)
        }

        message.channel.send(embed)

      } catch (error) {
        let err = clean(error)
        if (err.length > 1024) {
          const {body} = await post("https://hastebin.com/documents").send(err);
          embed.addField("Output", `https://hastebin.com/${body.key}.js`).setColor("RED")
        } else {
          embed.addField("Output", "```js\n" + err + "```").setColor("RED");
        }

        message.channel.send(embed)
      }
    }
}

function clean(string) {
  if (typeof text === "string") {
    return string.replace(/`/g, "`" + String.fromCharCode(8203))
    .replace(/@/g, "@" + String.fromCharCode(8203))
  } else {
    return string;
  }
}