import React, { useState } from 'react'
import ContactBtn from './ContactBtn'
import ContactDetails from './ContactDetails'
export default function ContactList({ contactList, child }) {
  const isName = (name, username) => (name ? name : username)

  return (
    <>
      {contactList.length == 0 ? (
        <div>You have no contacts :(</div>
      ) : (
        contactList.map((arr) => {
          const { id, name, username } = arr
          return (
            <>
              <div key={id} className={child}>
                <p>{isName(name, username)}</p>
                <ContactBtn name={isName(name, username)} id={id} />
              </div>
            </>
          )
        })
      )}
    </>
  )
}
