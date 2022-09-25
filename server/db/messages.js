const connection = require('./connection')

module.exports = {
  getMessagesByUsername,
}

function getMessagesByUsername(username, db = connection) {
  return db('messages').select().where('recipient_username', username)
}
