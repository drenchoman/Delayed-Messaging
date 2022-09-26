import React, { useState } from 'react'
import styles from '../../../server/public/styles/Contacts.module.css'
import { addContact } from '../../api'

import NavTwo from './NavTwo'
import ContactList from './Fragments/ContactList'
import ContactDetails from './Fragments/ContactDetails'

function Contacts() {
  const {
    flex,
    mid_container,
    border,
    rightside_container,
    leftside_container,
    child,
    btn,
    add_contact,
  } = styles

  const [details, setDetails] = useState({
    name: '',
    newCorrespondence: 'New Correspondence',
    edit: 'Edit',
    delete: 'Delete',
    block: 'Block',
  })

  function displayDetail() {
    if (details.name.length > 1) {
      return <ContactDetails details={details} />
    }
  }

  const [addName, setAddName] = useState('')

  function onchangeHandler(e) {
    setAddName(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault()
    console.log(addName)
    const newContact = {
      username: addName,
      authId: 'auth0|123',
    }
    addContact(newContact)
  }

  return (
    <>
      <NavTwo />
      <div className={flex}>
        <div className={border + ' ' + leftside_container}>
          <form onSubmit={submitHandler}>
            <h5>New Contact +</h5>
            <input
              onChange={onchangeHandler}
              className={add_contact}
              type="text"
              placeholder="enter username"
              value={addName}
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <div className={mid_container + ' ' + border}>
          <h5>Name</h5>
          {/* <h5>Add</h5> */}
          <ContactList child={child} btn={btn} setDetails={setDetails} />
        </div>
        <div className={border + ' ' + rightside_container}>
          {displayDetail()}
        </div>
      </div>
    </>
  )
}

export default Contacts
