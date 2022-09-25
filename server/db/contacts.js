const connection = require('./connection')

module.exports = {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
}

async function getContacts(userId, db = connection) {
  return db('contacts').where('user_id', userId).select()
}

async function addContact(newContact, db = connection) {
  const { userId, name, username } = newContact
  return db('contacts').insert({ user_id: userId, name, username })
}

async function updateContact(newContact, user, db = connection) {
  return db('contacts')
    .where('id', newContact.id)
    .first()
    .then((contact) => authorizeUpdate(contact, user))
    .then(() => {
      return db('fruits').where('id', newContact.id).update(newContact)
    })
    .then(() => db)
    .then(getContacts)
    // .then(sort)
}

async function deleteContact(id, auth0Id, db = connection) {
  return db('fruits')
    .where('id', id)
    .first()
    .then((contact) => authorizeUpdate(contact, auth0Id))
    .then(() => {
      return db('fruits').where('id', id).delete()
    })
    .then(() => db)
    .then(getContacts)
    // .then(sort)
}

function authorizeUpdate(contact, auth0Id) {
  if (contact.added_by_user !== auth0Id) {
    throw new Error('Unauthorized')
  }
}
