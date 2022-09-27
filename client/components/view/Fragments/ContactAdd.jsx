import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function ContactAdd({ addContact, add_contact, setList }) {
  const [addName, setAddName] = useState('')
  const user = useSelector((state) => state.user)

  function onchangeHandler(e) {
    setAddName(e.target.value)
  }

  function randomNumber() {
    return Math.floor(Math.random() * 99999)
  }

  function submitHandler(e) {
    e.preventDefault()
    const newContact = {
      id: randomNumber(),
      username: addName,
      authId: user.auth0Id,
    }
    setList((prevState) => [...prevState, newContact])
    addContact(newContact)
  }

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
      <button>Add</button>
    </form>
  )
}
