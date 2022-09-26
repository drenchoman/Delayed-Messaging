const connection = require('./connection')

module.exports = {
  userExists,
  getUser,
  createUser,
  getDelay,
  updateDelay,
  getUserById,
}

function userExists(username, db = connection) {
  return db('users')
    .where('username', username)
    .then((usersFound) => {
      return usersFound.length > 0
    })
}

function updateDelay(update, db = connection) {
  const { authId, delayId } = update
  return db('users').where({ auth0_id: authId }).update({ delay_id: delayId })
}

function getUser(id, db = connection) {
  return db('users').select().where('auth0_id', id).first()
}

function getUserById(id, db = connection) {
  return db('users').select().where('auth0_id', id).first()
}

function createUser(user, db = connection) {
  return db('users').insert(user)
}

function getDelay(username, db = connection) {
  return db('users')
    .join('delay', 'users.delay_id', 'delay.id')
    .where('username', username)
    .select('value')
}
