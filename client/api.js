import request from 'superagent'
const rootUrl = '/api/v1'

// USER CALLS

export function getUser(token) {
  return request
    .get(`${rootUrl}/users`)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body)
    .catch(logError)
}

export function addUser(user, token) {
  console.log('testing')
  console.log(user)
  return request
    .post(`${rootUrl}/users`)
    .set('authorization', `Bearer ${token}`)
    .send(user)
    .catch(logError)
}

export function updateDelay(updatedDelay, token) {
  return request
    .patch(`${rootUrl}/users`)
    .set('Authorization', `Bearer ${token}`)
    .semd(updatedDelay)
    .then((res) => res.body)
    .catch(logError)
}

// MESSAGE CALLS

export function getAllViewableMessages(username, token) {
  return request
    .get(`${rootUrl}/messages/${username}`)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body)
    .catch(logError)
}

export function getAllDraftedMessages(username, token) {
  return request
    .get(`${rootUrl}/messages/drafts/${username}`)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body)
    .catch(logError)
}

export function getAllArchivedMessages(username, token) {
  return request
    .get(`${rootUrl}/messages/archived/${username}`)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body)
    .catch(logError)
}

export function postNewMessage(newMessage, token) {
  return request
    .post(`${rootUrl}/messages`)
    .set('Authorization', `Bearer ${token}`)
    .send(newMessage)
    .catch(logError)
}

export function archiveMessage(id, token) {
  return request
    .patch(`${rootUrl}/messages/archived`)
    .set('Authorization', `Bearer ${token}`)
    .send(id)
    .catch(logError)
}

export function deleteMessage(id, token) {
  return request
    .patch(`${rootUrl}/messages/delete`)
    .set('Authorization', `Bearer ${token}`)
    .send(id)
    .catch(logError)
}

// CONTACT CALLS

export function getAllContacts(authid, token) {
  return request
    .get(`${rootUrl}/contacts/${authid}`)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body)
    .catch(logError)
}

export function addContact(newContact, token) {
  return request
    .post(`${rootUrl}/contacts`)
    .set('Authorization', `Bearer ${token}`)
    .send(newContact)
    .catch(logError)
}

export function updateContact(updatedContact, token) {
  return request
    .patch(`${rootUrl}/contacts`)
    .set('Authorization', `Bearer ${token}`)
    .send(updatedContact)
    .catch(logError)
}

export function deleteContact(id, token) {
  return request
    .delete(`${rootUrl}/contacts`)
    .set('Authorization', `Bearer ${token}`)
    .send(id)
    .catch(logError)
}

function logError(err) {
  if (err.response.text === 'Username Taken') {
    throw new Error('Username already taken - please choose another')
  } else if (err.message === 'Forbidden') {
    throw new Error(
      'Only the user who added the fruit may update and delete it'
    )
  } else {
    // eslint-disable-next-line no-console
    console.error('Error consuming the API (in client/api.js):', err)
    throw err
  }
}
