const express = require('express')
// const checkJwt = require('../auth0')
const db = require('../db/contacts')

const router = express.Router()

module.exports = router

// GET /api/v1/contacts/username
router.get('/:username', async (req, res) => {
  try {
    // const username = req.params.username
    const contacts = await db.getContacts()
    res.json({ contacts })
  } catch (error) {
    console.error(error)
    res.status(500).send(error.message)
  }
})
