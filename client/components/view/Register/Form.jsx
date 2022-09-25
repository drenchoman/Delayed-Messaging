import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from '../../../../server/public/styles/Register.module.css'
import { addUser } from '../../../api'
import { updateLoggedInUser } from '../../../slices/user'
import { useAuth0 } from '@auth0/auth0-react'

export default function Form({ setCreated }) {
  const [form, setForm] = useState({
    username: '',
  })
  const user = useSelector((state) => state.user)
  const { getAccessTokenSilently } = useAuth0()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (user.username) {
      setCreated(true)
      setTimeout(
        () => navigate(`/correspondence/${user.auth0Id}/dashboard`),
        1600
      )
    }
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
      username: form.username,
      email: user.email,
      ...form,
    }

    addUser(userInfo, user.token)
      .then(() => {
        dispatch(updateLoggedInUser(userInfo))
      })
      .catch((err) => setErrorMsg(err.message))
  }

  const hideError = () => {
    setErrorMsg('')
  }
  const [errorMsg, setErrorMsg] = useState('')
  return (
    <>
      {errorMsg && <div onClick={hideError}>Error: {errorMsg}</div>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="username">
          Username:
          <input
            className={styles.formInput}
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </label>
        <button className={styles.button} disabled={!form.username}>
          Save Profile
        </button>
      </form>
    </>
  )
}
