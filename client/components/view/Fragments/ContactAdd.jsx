import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../../../../server/public/styles/Contacts.module.css'
import { updateContactList } from '../../../slices/contacts'

export default function ContactAdd({ addContact, add_contact }) {
  const [addName, setAddName] = useState('')
  const user = useSelector((state) => state.user)
  const [errorMsg, setErrorMsg] = useState('')
  const dispatch = useDispatch()

  function onchangeHandler(e) {
    setAddName(e.target.value)
  }

  function randomNumber() {
    return Math.floor(Math.random() * 99999)
  }

  async function submitHandler(e) {
    e.preventDefault()
    const newContact = {
      id: randomNumber(),
      username: addName,
      authId: user.auth0Id,
    }
    addContact(newContact)
      .then(() => {
        setErrorMsg('')
        setAddName('')
      })
      .catch((err) => {
        console.log(err)
        setErrorMsg(err.message)
      })
  }

  return (
    <>
      <form className={styles.addForm} onSubmit={submitHandler}>
        <h5 className={styles.formHeader}>New Contact +</h5>
        <input
          onChange={onchangeHandler}
          className={add_contact}
          type="text"
          placeholder="Enter Username"
          value={addName}
        />
        {errorMsg ? <span>{errorMsg}</span> : ''}

        <button className={styles.addButton}>Add</button>
      </form>
    </>
  )
}
