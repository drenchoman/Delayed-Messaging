const express = require('express')
const checkJwt = require('../auth0')
const db = require('../db/messages')

const router = express.Router()

// TODO: ADD AUTH
router.get('/:username', async (req, res) => {
  const auth0_id = req.user?.sub
  const username = req.params.username
  try {
    const messages = await db.getAllMessages(username)
    res.json({ messages })
  } catch (err) {
    console.error(err, username)
    res.status(500).send(err.message)
  }
})

// TODO: ADD POST ROUTE FOR NEW MESSAGES

module.exports = router
