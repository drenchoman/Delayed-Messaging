const express = require('express')
// const checkJwt = require('../auth0')
const db = require('../db/contacts')

const router = express.Router()

module.exports = router

// GET /api/v1/contacts/username
router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId
    const contacts = await db.getContacts(userId)
    res.json({ contacts })
  } catch (error) {
    console.error(error)
    res.status(500).send(error.message)
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
