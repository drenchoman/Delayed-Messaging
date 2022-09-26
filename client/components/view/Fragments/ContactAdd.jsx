import React, { useState } from 'react'
import { addContact } from "../../../api";

export default function ContactAdd({getContacts, add_contact, setList}) {
  const [addName, setAddName ] = useState('')

  function onchangeHandler(e) {
    setAddName(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault()
    console.log(addName);
    const newContact = {
      username: addName,
      authId: 'auth0|123'
    }
    addContact(newContact)
  }

  const updateList = () => getContacts()

  return (
    <form onSubmit={submitHandler}>
      <h5>New Contact +</h5>
      <input
        onChange={onchangeHandler}
        className={add_contact}
        type="text"
        placeholder="enter username"
        value={addName}
      />
      <button 
        type="submit" 
        onClick={updateList}>
          Add
      </button>
    </form>
  )
}
