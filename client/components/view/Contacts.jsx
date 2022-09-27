import React, { useState, useEffect } from 'react'
import styles from '../../../server/public/styles/Contacts.module.css'
import { getAllContacts, addContact } from '../../api'

import NavTwo from './NavTwo'
import ContactList from './Fragments/ContactList'
import ContactDetails from './Fragments/ContactDetails'
import ContactAdd from './Fragments/ContactAdd'
import { useSelector, useDispatch } from 'react-redux'
import { updateContactList } from '../../slices/contacts'

function Contacts() {
  const [list, setList] = useState([])
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  async function getContacts() {
    const contacts = await getAllContacts(user.auth0Id)
    console.log(contacts)
    setList(contacts)
    dispatch(updateContactList(contacts))
  }

  useEffect(() => getContacts(), [])

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

  return (
    <>
      <NavTwo />
      <div className={flex}>
        <div className={`${border} ${leftside_container}`}>
          <ContactAdd
            add_contact={add_contact}
            addContact={addContact}
            setList={setList}
          />
        </div>
        <div className={`${mid_container} ${border}`}>
          <h5>Name</h5>
          {/* <h5>Add</h5> */}
          <ContactList
            list={list}
            child={child}
            btn={btn}
            setDetails={setDetails}
          />
        </div>
        <div className={`${border} ${rightside_container}`}>
          {displayDetail()}
        </div>
      </div>
    </>
  )
}

export default Contacts
