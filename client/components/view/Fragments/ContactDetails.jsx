import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from '../../../../server/public/styles/Buttons.module.css'

import { deleteContact } from '../../../api'

export default function ContactDetails({ details }) {
  const { name, newCorrespondence } = details
  const { btn_details, red, blue } = styles
  const user = useSelector((state) => state.user)
  const contact = useSelector((state) =>
    state.contacts.find((contact) => contact.name === name)
  )

  console.log(contact.id)

  return (
    <div>
      <p>Name: {name}</p>
      <Link className={`${btn_details} ${blue}`} to="/newcorrespondence">
        {newCorrespondence}
      </Link>
      <Link className={`${btn_details} ${blue}`} to="/">
        {details.edit}
      </Link>
      <button
        className={`${btn_details} ${red}`}
        // onClick={() => deleteContact(contact.id, user.token)}
      >
        {details.delete}
      </button>
      <Link className={`${btn_details} ${red}`} to="/">
        {details.block}
      </Link>
    </div>
  )
}
