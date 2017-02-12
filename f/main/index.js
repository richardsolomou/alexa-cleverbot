const respond = require('../../alexa/respond.js');
const router  = require('../../alexa/router.js');

module.exports = (params, callback) =>
{
  router(params, (err, result) =>
  {
    if (err) {
      return respond.tell('Error: ' + err.message, callback);
    }

    return respond.ask(result, callback);
  });
};
