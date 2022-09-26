import React, { useEffect, useState } from 'react'
import ContactBtn from './ContactBtn'
import { getAllContacts } from '../../../api.js'
import { useSelector } from 'react-redux'

export default function ContactList({ child, setDetails }) {
  const user = useSelector((state) => state.user)
  const [list, setList] = useState([])

  async function getContacts() {
    const contacts = await getAllContacts(user.userName)
    setList(contacts)
  }

  useEffect(() => getContacts(), [])

  return (
    <>
      {list.length == 0 ? (
        <div>You have no contacts :(</div>
      ) : (
        list.map((arr) => {
          const { id, name } = arr
          return (
            <div key={id} className={child}>
              <p>{name}</p>
              <ContactBtn name={name} setDetails={setDetails} />
            </div>
          )
        })
      )}
    </>
  )
}
