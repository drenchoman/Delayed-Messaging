const express = require('express')
// const checkJwt = require('../auth0')
const db = require('../db/contacts')

const router = express.Router()

module.exports = router

// A public endpoint that anyone can access
// GET /api/v1/contacts
router.get('/:id', async (req, res) => {
  const { id } = req.params
  console.log(id)
  try {
    const contacts = await db.getContacts(id)
    res.json(contacts)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.post('/', async (req, res) => {
  const { username, authId } = req.body
  const contactAlreadyExists = await db.checkInDb(username)
  if (contactAlreadyExists.length > 0) {
    res.status(409).json({ errorMessage: 'Contact already added.' })
  }
  try {
    const newContact = {
      username,
      authId,
    }
    await db.addContact(newContact)
    res.sendStatus(201)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.patch('/', async (req, res) => {
  try {
    await db.updateContact(req.body)
    res.sendStatus(201)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.delete('/', async (req, res) => {
  try {
    await db.deleteContact(req.body.id)
    res.json({ message: `Successfully deleted contact with id ${req.body.id}` })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.post('/:userId', async (req, res) => {
  const userId = req.params.userId
  const { name, username } = req.body
  try {
    const newContact = {
      name,
      username,
      userId,
    }
    await db.addContact(newContact)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).send(error.message)
  }
})


