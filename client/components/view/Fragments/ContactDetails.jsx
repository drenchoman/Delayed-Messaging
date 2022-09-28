import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateContactList } from '../../../slices/contacts'
import styles from '../../../../server/public/styles/Buttons.module.css'
import { updateSend } from '../../../slices/send'
import { deleteContact, getAllContacts } from '../../../api'
import ContactBtn from './ContactBtn'

export default function ContactDetails({ id, clicked }) {
  const { btn_details, red, blue } = styles
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  const contact = useSelector((state) =>
    state.contacts.find((contact) => contact.id === id)
  )
  const navigate = useNavigate()

  async function handleDelete() {
    await deleteContact({ id: contact.id }, user.token)
    const contacts = await getAllContacts(user.auth0Id)
    dispatch(updateContactList(contacts))
  }

  async function handleSend() {
    dispatch(updateSend(contact.username))
    navigate(`/correspondence/${user.username}/newcorrespondence`)
  }

  return clicked ? (
    <div className={styles.detailsContainer}>
      <span className={`${btn_details} ${blue}`} onClick={handleSend}>
        New Correspondence
      </span>

      <Link className={`${btn_details} ${blue}`} to="/">
        Edit
      </Link>
      <button className={`${btn_details} ${red}`} onClick={handleDelete}>
        Delete
      </button>
      <Link className={`${btn_details} ${red}`} to="/">
        Block
      </Link>
    </div>
  ) : null
}
