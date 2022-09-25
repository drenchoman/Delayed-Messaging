import React from "react";
import styles from '../../../../server/public/styles/Buttons.module.css'

export default function ContactBtn({ name, setDetails }) {
  const { btn_contact } = styles

  function details(e) {
    
    setDetails((state) => { return {...state, name: e.target.value}})
  }

  return (
    <button 
      value={name} 
      className={btn_contact} 
      onClick={details} >...
    </button>
  )
}