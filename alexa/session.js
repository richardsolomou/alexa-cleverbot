const session = {
  conversations: []
};

module.exports = {
  /**
   * Add interaction
   *
   * @param {String} request
   * @param {String} response
   */
  addInteraction: function (request, response)
  {
    session.conversations.unshift({ request, response });
  },

  /**
   * Get session
   *
   * @returns {Object}
   */
  getSession: function ()
  {
    return session;
  }
};
