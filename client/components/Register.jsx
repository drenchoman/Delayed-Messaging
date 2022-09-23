import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addUser } from '../api'
import { updateLoggedInUser } from '../slices/user'
import { useAuth0 } from '@auth0/auth0-react'

function Register() {
  const user = useSelector((state) => state.user)
  const { getAccessTokenSilently } = useAuth0()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    username: '',
  })
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (user.username) navigate('/')
  }, [user])

  const handleChange = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const userInfo = {
      auth0Id: user.auth0Id,
      email: user.email,
      ...form,
    }

    addUser(userInfo, user.token)
      .then(() => dispatch(updateLoggedInUser(userInfo)))
      .catch((err) => setErrorMsg(err.message))
  }

  const hideError = () => {
    setErrorMsg('')
  }

  return (
    <>
      <h2>Complete profile set up</h2>
      {errorMsg && <div onClick={hideError}>Error: {errorMsg}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </label>

        <button disabled={!form.username}>Save Profile</button>
      </form>
    </>
  )
}

export default Register
