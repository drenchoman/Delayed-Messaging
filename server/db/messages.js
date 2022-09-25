const connection = require('./connection')

module.exports = {
  getMessages,
  addMessage,
}

function getMessages(username, db = connection) {
  return db('messages').select().where('recipient_username', username)
}

function addMessage(newMessage, db = connection) {
  const { recipientUsername, senderUsername, message, subject, activeTime } =
    newMessage
  return db('messages').insert({
    recipient_username: recipientUsername,
    sender_username: senderUsername,
    message,
    subject,
    active_time: activeTime,
  })
}
