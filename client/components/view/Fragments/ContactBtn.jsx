import React, { useState } from 'react'
import styles from '../../../../server/public/styles/Buttons.module.css'
import ContactDetails from './ContactDetails'

export default function ContactBtn({ name, id }) {
  const { btn_contact } = styles
  function handleClick() {
    setClicked(!clicked)
  }
  const [clicked, setClicked] = useState(false)

  return (
    <>
      <button value={name} className={btn_contact} onClick={handleClick}>
        ...
      </button>
      <ContactDetails id={id} clicked={clicked} />
    </>
  )
}
