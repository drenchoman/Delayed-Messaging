const connection = require('./connection')

module.exports = {
  getAllMessages,
}

function getAllMessages(username, db = connection) {
  return db('messages').select().where('recepient_username', username)
}
