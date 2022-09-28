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

  async function submitHandler(e) {
    e.preventDefault()
    const newContact = {
      username: addName,
      authId: user.auth0Id,
    }
    addContact(newContact)
      .then(() => {
        setErrorMsg('')
        setAddName('')
      })
      .catch((err) => {
        setErrorMsg(err.message)
      })
  }

  const { new_contact_column } = styles

  return (
    <>
      <form className={styles.addForm} onSubmit={submitHandler}>
        <div className={new_contact_column}>
          <span className={styles.formHeader}>New Contact +</span>
          <input
            onChange={onchangeHandler}
            className={add_contact}
            type="text"
            placeholder="Enter Username"
            value={addName}
          />
        </div>
        {errorMsg ? <span>{errorMsg}</span> : ''}

        <button className={styles.addButton}>Add</button>
      </form>
    </>
  )
}
