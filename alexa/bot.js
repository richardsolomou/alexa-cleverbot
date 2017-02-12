const cleverbot = require('cleverbot.io');
let bot;

if (!process.env.cleverbot_user) {
  console.log('#\r\n# Failed to find cleverbot user in `env.json`\r\n#');
}

if (!process.env.cleverbot_key) {
  console.log('#\r\n# Failed to find cleverbot key in `env.json`\r\n#');
}

if (!process.env.cleverbot_nick) {
  console.log('#\r\n# Failed to find cleverbot nick in `env.json`\r\n#');
}

bot = new cleverbot(process.env.cleverbot_user, process.env.cleverbot_key);
bot.setNick(process.env.cleverbot_nick);

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
