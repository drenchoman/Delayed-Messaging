const express = require('express')
const { del } = require('superagent')
const checkJwt = require('../auth0')

const db = require('../db/messages')
const userDb = require('../db/users')

const router = express.Router()

// TODO: ADD AUTH CHECK
router.get('/:username', async (req, res) => {
  // const auth0_id = req.user?.sub
  console.log('here')
  const username = req.params.username
  const dateNow = new Date()
  try {
    const messages = await db.getAllMessages(username, dateNow)
    res.json({ messages })
  } catch (err) {
    console.error(err, username)
    res.status(500).send(err.message)
  }
})

// api/v1/messages/
// TODO: ADD POST ROUTE FOR NEW MESSAGES
router.post('/', async (req, res) => {
  // const auth0_id = req.user?.sub
  let delayValue = await userDb.getDelay(req.params.username)
  let delayLimit = delayValue[0].value
  delayValue = Math.floor(Math.random() * delayLimit)

  const today = new Date()
  const activeTime = new Date()
  activeTime.setDate(today.getDate() + delayValue)

  try {
    const { message, subject, senderUsername, recipientUsername } = req.body
    const newMessage = {
      message,
      subject,
      senderUsername,
      recipientUsername,
      activeTime,
      read: false,
      archived: false,
      sent: true,
    }
    await db.addMessage(newMessage)
    res.sendStatus(201)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.patch('/archived', async (req, res) => {
  const { id } = req.body
  try {
    await db.archiveMessage(id)
    res.sendStatus(201)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.patch('/delete', async (req, res) => {
  const { id } = req.body
  try {
    await db.deleteMessage(id)
    res.sendStatus(201)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.get('/archived/:username', async (req, res) => {
  const username = req.params.username
  try {
    const archivedMessages = await db.getAllArchivedMessages(username)
    res.json(archivedMessages)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.get('/drafts/:username', async (req, res) => {
  const username = req.params.username
  try {
    const drafts = await db.getAllDraftedMessages(username)
    res.json(drafts)
  } catch (err) {
    console.error(err.message(res.status(500).send(err.message)))
  }
})

module.exports = router
