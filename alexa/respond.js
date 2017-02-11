module.exports = {
  error: function (err, callback)
  {
    return this.say(`Error: ${err.message}`, callback, true);
  },
  say: function (body, callback, shouldEndSession)
  {
    callback(null, {
      version: 'dev',
      sessionAttributes: {},
      response: {
        outputSpeech: {
          type: 'PlainText',
          text: body || 'invalid response'
        },
        shouldEndSession: Boolean(shouldEndSession)
      }
    });
  }
};
