const bot     = require('../bot');
const session = require('../session');

module.exports = function (slots, callback)
{
  let slot = 'Hello';
  let promise;

  if (slots.say && slots.say.value) {
    slot = slots.say.value;
  }

  promise = bot(slot);

  promise.then((val) =>
  {
    session.addInteraction(slot, val);

    return callback(null, val);
  });
};
