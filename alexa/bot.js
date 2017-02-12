const cleverbot = require('cleverbot.io');
const bot       = new cleverbot(process.env.cleverbot.user, process.env.cleverbot.key);

bot.setNick('Alexa-' + Math.random());

bot.create(function (err, session)
{
  if (err) {
    console.err(err, session);
  }
});

module.exports = function (prompt)
{
  return new Promise(function (resolve, reject)
  {
    bot.ask(prompt, function (err, res)
    {
      if (err) {
        reject(err);
      }

      resolve(res || err);
    });
  });
};
