const connection = require('./connection')

module.exports = {
  getContacts,
  addContact,
  checkInDb,
  updateContact,
  deleteContact,
}
// Send auth0id
function getContacts(id, db = connection) {
  return db('contacts').select().where('user_id', id)
}

function addContact(newContact, db = connection) {
  const { username, authId } = newContact
  return db('contacts').insert({
    user_id: authId,
    username: username,
    name: null,
    blocked: false,
  })
}

function updateContact(updateInfo, db = connection) {
  const { id, authId, name, blocked } = updateInfo
  return db('contacts')
    .where({ user_id: authId, id: id })
    .update({ name, blocked })
}

function deleteContact(id, db = connection) {
  return db('contacts').where({ id: id }).delete()
}

function checkInDb(username, db = connection) {
  return db('contacts').select().where('username', username)
}
