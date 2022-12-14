const express = require('express')
const checkJwt = require('../auth0')

const db = require('../db/users')
const router = express.Router()

// TODO: use checkJwt as middleware
// GET /api/v1/users
router.get('/', checkJwt, (req, res) => {
  const auth0_id = req.user?.sub
  if (!auth0_id) {
    res.send(null)
  } else {
    db.getUser(auth0_id)

      .then((user) => {
        res.json(user ? user : null)
      })
      .catch((err) => res.status(500).send(err.message))
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const user = await db.getUserById(id)
    res.status(200).json(user)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.patch('/', async (req, res) => {
  try {
    await db.updateDelay(req.body)
    res.sendStatus(201)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// TODO: Need to add checkJwt middleware but it breaks the function,
// maybe not set up properly in auth0.js or vite issue?
// Need to check with Ahmad

// POST /api/v1/users
router.post('/', (req, res) => {
  // const auth0_id = req.user?.sub
  const { username, email, auth0Id } = req.body
  const userDetails = {
    auth0_id: auth0Id,
    username,
    name: null,
    email,
    delay_id: 1,
  }

  db.userExists(username)
    .then((usernameTaken) => {
      if (usernameTaken) throw new Error('Username Taken')
    })
    .then(() => db.createUser(userDetails))
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.error(err)
      if (err.message === 'Username Taken') {
        res.status(403).send('Username Taken')
      } else {
        res.status(500).send(err.message)
      }
    })
})

module.exports = router
