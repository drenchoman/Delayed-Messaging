import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from '../../../../server/public/styles/Register.module.css'
import Nav from '../../Nav'
import Form from './Form'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [created, setCreated] = useState(false)
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)

  useEffect(() => {
    if (user.username.length > 1) {
      navigate(`/correspondence/${user.auth0Id}/dashboard`)
    }
  }, [])

  return (
    <>
      <Nav />
      <div className={`${styles.wrapper} ${created ? styles.fade : ''}`}>
        <h2 className={styles.header}>Complete Profile Set Up</h2>

        <Form setCreated={setCreated} />
      </div>
    </>
  )
}

export default Register
