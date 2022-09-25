const express = require('express')
const checkJwt = require('../auth0')

const db = require('../db/messages')

const router = express.Router()

// TODO: ADD AUTH
router.get('/:username', async (req, res) => {
  // const auth0_id = req.user?.sub
  console.log('here')
  const username = req.params.username
  try {
    const messages = await db.getAllMessages(username)
    res.json({ messages })
  } catch (err) {
    console.error(err, username)
    res.status(500).send(err.message)
  }
})

// api/v1/messages/:username
// TODO: ADD POST ROUTE FOR NEW MESSAGES
router.post('/:username', async (req, res) => {
  // const auth0_id = req.user?.sub
  const username = req.params.username
  try {
    const { message, subject, recipientUsername, activeTime } = req.body
    const senderUsername = username
    const newMessage = {
      message,
      subject,
      senderUsername,
      recipientUsername,
      activeTime,
    }
    await db.addMessage(newMessage)
    res.sendStatus(201)
  } catch (err) {
    console.error(err, username)
    res.status(500).send(err.message)
  }
})

module.exports = router
