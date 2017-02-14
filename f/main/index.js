const respond = require('../../alexa/respond.js');
const router  = require('../../alexa/router.js');

module.exports = (params, callback) =>
{
  router(params, (err, result, tell) =>
  {
    tell = tell || false;

    if (err) {
      return respond.tell('Error: ' + err.message, callback);
    }

    if (tell) {
      return respond.tell(result, callback);
    }

    return respond.ask(result, callback);
  });
};
