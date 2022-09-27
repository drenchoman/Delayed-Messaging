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
  const contactList = useSelector((state) => state.contacts)
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  async function getContacts() {
    const contacts = await getAllContacts(user.auth0Id)
    setList(contacts)
    dispatch(updateContactList(contacts))
  }

  useEffect(() => getContacts(), [contactList])

  const {
    flex,
    middleContainer,
    border,
    rightsideContainer,
    leftsideContainer,
    child,
    btn,
    add_contact,
    containerHeader,
    midContent,
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
        <div className={`${border} ${leftsideContainer}`}>
          <ContactAdd
            add_contact={add_contact}
            addContact={addContact}
            setList={setList}
            list={list}
          />
        </div>
        <div className={`${middleContainer} ${border}`}>
          <div className={midContent}>
            <h5 className={containerHeader}>Username</h5>
            {/* <h5>Add</h5> */}
            <ContactList
              contactList={contactList}
              child={child}
              btn={btn}
              setDetails={setDetails}
            />
          </div>
        </div>
        <div className={`${border} ${rightsideContainer}`}>
          {displayDetail()}
        </div>
      </div>
    </>
  )
}

export default Contacts
