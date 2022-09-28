const connection = require('./connection')

module.exports = {
  getAllMessages,
  getAllArchivedMessages,
  getAllDraftedMessages,
  addMessage,
  archiveMessage,
  deleteMessage,
}

function getAllMessages(username, dateNow, db = connection) {
  return db('messages')
    .select()
    .where('recipient_username', username)
    .andWhere('active_time', '<', dateNow)
    .andWhere('read', '=', false)
}

function getAllArchivedMessages(username, db = connection) {
  return db('messages')
    .select()
    .where('recipient_username', username)
    .andWhere('archived', '=', true)
}

function getAllDraftedMessages(username, db = connection) {
  return db('messages')
    .select()
    .where('sender_username', username)
    .andWhere('sent', '=', false)
}

function archiveMessage(id, db = connection) {
  return db('messages').where({ id: id }).update({
    archived: true,
    read: true,
  })
}

function deleteMessage(id, db = connection) {
  console.log(id)
  return db('messages')
    .where({ id: id })
    .update({ archived: false, read: true })
}

function addMessage(newMessage, db = connection) {
  const {
    recipientUsername,
    senderUsername,
    message,
    subject,
    activeTime,
    read,
    archived,
    sent,
  } = newMessage
  return db('messages').insert({
    recipient_username: recipientUsername,
    sender_username: senderUsername,
    message,
    subject,
    active_time: activeTime,
    read,
    archived,
    sent,
  })
}
