const express = require('express')
// const checkJwt = require('../auth0')
const db = require('../db/contacts')
const userDb = require('../db/users')

const router = express.Router()

module.exports = router

// A public endpoint that anyone can access
// GET /api/v1/contacts
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const contacts = await db.getContacts(id)
    res.json(contacts)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// POST /api/v1/contacts
router.post('/', async (req, res) => {
  const { username, authId } = req.body
  try {
    const userExists = await userDb.userExists(username)

    const contactAlreadyExists = await db.checkInDb(username)
    if (contactAlreadyExists.length > 0) {
      throw new Error('Contact already added.')
    }
    if (!userExists) {
      throw new Error('Username does not exist.')
    }
    const newContact = {
      username,
      authId,
    }
    await db.addContact(newContact)
    res.sendStatus(201)
  } catch (err) {
    console.log(err.message)
    if (
      err.message === 'Contact already added.' ||
      err.message === 'Username does not exist.'
    ) {
      res.status(400).send(err.message)
      return
    } else {
      res.status(500).send(err.message)
      return
    }
  }
})

// PATCH /api/v1/contacts
router.patch('/', async (req, res) => {
  try {
    await db.updateContact(req.body)
    res.sendStatus(201)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// DELETE /api/v1/delete
router.delete('/', async (req, res) => {
  try {
    await db.deleteContact(req.body.id)
    res.json({ message: `Successfully deleted contact with id ${req.body.id}` })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})
