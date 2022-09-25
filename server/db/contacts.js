const connection = require('./connection')

module.exports = {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
}

function sort(userArray) {
  const allUsers = [...userArray]
  allUsers.sort((a, b) => a.id - b.id)
  return allUsers
}

async function getContacts(db = connection) {
  return db('contacts').select()
}

async function addContact(contact, db = connection) {
  return db('contacts')
    .insert(contact)
    .then(() => db)
    .then(getContacts)
    .then(sort)
}

async function updateContact(newContact, user, db = connection) {
  return db('contacts')
    .where('id', newContact.id)
    .first()
    .then((fruit) => authorizeUpdate(fruit, user))
    .then(() => {
      return db('fruits').where('id', newContact.id).update(newContact)
    })
    .then(() => db)
    .then(getContacts)
    .then(sort)
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
    .then(sort)
}

function authorizeUpdate(contact, auth0Id) {
  if (contact.added_by_user !== auth0Id) {
    throw new Error('Unauthorized')
  }
}
