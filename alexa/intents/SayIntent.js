const bot = require('../bot');

module.exports = function (slots, callback)
{
  let slot = 'Hello';

  if (slots.say && slots.say.value) {
    slot = slots.say.value;
  }

  const promise = bot(slot);

  promise.then(function (val)
  {
    return callback(null, val);
  });
};
