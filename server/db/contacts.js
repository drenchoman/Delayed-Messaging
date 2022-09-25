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
      return db('fruits').where('id', newFruit.id).update(newFruit)
    })
    .then(() => db)
    .then(getFruits)
    .then(sort)
}

async function deleteContact(id, auth0Id, db = connection) {
  return db('fruits')
    .where('id', id)
    .first()
    .then((fruit) => authorizeUpdate(fruit, auth0Id))
    .then(() => {
      return db('fruits').where('id', id).delete()
    })
    .then(() => db)
    .then(getFruits)
    .then(sort)
}

async function getFruits(db = connection) {
  return db('fruits')
    .select(
      'id',
      'name',
      'average_grams_each as averageGramsEach',
      'added_by_user as addedByUser'
    )
    .then(sort)
}


function authorizeUpdate(fruit, auth0Id) {
  if (fruit.added_by_user !== auth0Id) {
    throw new Error('Unauthorized')
  }
}
