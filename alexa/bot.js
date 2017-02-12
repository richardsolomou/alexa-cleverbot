const cleverbot = require('cleverbot.io');
let bot;

if (!process.env.cleverbot) {
  console.log('#\r\n# Failed to find cleverbot object in `env.json`\r\n#');
}

if (!process.env.cleverbot.user) {
  console.log('#\r\n# Failed to find cleverbot user in `env.json`\r\n#');
}

if (!process.env.cleverbot.key) {
  console.log('#\r\n# Failed to find cleverbot key in `env.json`\r\n#');
}

if (!process.env.cleverbot.nick) {
  console.log('#\r\n# Failed to find cleverbot nick in `env.json`\r\n#');
}

bot = new cleverbot(process.env.cleverbot.user, process.env.cleverbot.key);
bot.setNick(process.env.cleverbot.nick);

bot.create(function (err, session)
{
  if (err) {
    console.err(err, session);
  }
});

module.exports = function (prompt)
{
  return new Promise(function (resolve)
  {
    bot.ask(prompt, function (err, res)
    {
      if (err) {
        resolve(err);
      }

      resolve(res);
    });
  });
};
