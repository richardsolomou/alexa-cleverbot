const leven = require('leven');

const bot     = require('../bot');
const session = require('../session');

const customResponses = {
  'westworld': 'doesn\'t look like anything to me'
};

module.exports = function (slots, callback)
{
  let slot = 'Hello';
  let promise;

  if (slots.say && slots.say.value) {
    slot = slots.say.value;
  }

  Object.keys(customResponses).forEach((response) =>
  {
    if (leven(slot.toLowerCase(), response) < 5) {
      return callback(null, customResponses[response]);
    }
  });

  promise = bot(slot);

  promise.then((val) =>
  {
    session.addInteraction(slot, val);

    return callback(null, val);
  });
};
