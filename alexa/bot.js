const cleverbot = require('cleverbot.io');
const bot       = new cleverbot('G7kEL12aX2wMUmIk', 'Wu50DJxP1lBERF1PKkgWbevTDbmaFhNo');

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
