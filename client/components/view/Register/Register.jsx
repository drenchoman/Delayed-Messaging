import React, { useState } from 'react'
import styles from '../../../../server/public/styles/Register.module.css'
import Nav from '../../Nav'
import Form from './Form'

function Register() {
  const [created, setCreated] = useState(false)

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
