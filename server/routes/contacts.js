const express = require('express')
// const checkJwt = require('../auth0')
const db = require('../db/contacts')

const router = express.Router()

module.exports = router

router.get('/')

// A public endpoint that anyone can access
// GET /api/v1/contacts
router.get('/', async (req, res) => {
  try {
    const fruits = await db.getFruits()
    res.json({ fruits })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})
