import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateContactList } from '../../../slices/contacts'
import styles from '../../../../server/public/styles/Buttons.module.css'

import { deleteContact, getAllContacts } from '../../../api'

export default function ContactDetails({ details }) {
  const { name, newCorrespondence } = details
  const { btn_details, red, blue } = styles
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const contact = useSelector((state) =>
    state.contacts.find((contact) => contact.name === name)
  )

  async function handleDelete() {
    await deleteContact({ id: contact.id }, user.token)
    const contacts = await getAllContacts(user.auth0Id)
    dispatch(updateContactList(contacts))
  }

  return (
    <div className={styles.detailsContainer}>
      <p>Name: {name}</p>
      <Link className={`${btn_details} ${blue}`} to="/newcorrespondence">
        {newCorrespondence}
      </Link>
      <Link className={`${btn_details} ${blue}`} to="/">
        {details.edit}
      </Link>
      <button className={`${btn_details} ${red}`} onClick={handleDelete}>
        {details.delete}
      </button>
      <Link className={`${btn_details} ${red}`} to="/">
        {details.block}
      </Link>
    </div>
  )
}
