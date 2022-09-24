import React, { useState } from "react";
import styles from '../../../server/public/styles/Contacts.module.css'

import ContactList from "./Fragments/ContactList";

function Contacts() {
  const { flex, 
    mid_container, 
    border, 
    rightside_container,
    leftside_container, 
    child, 
    btn } = styles

  const [ details, setDetails ] = useState('')
  
  return (
    <div className={flex}>
      <div className={border + ' ' + leftside_container}>
        <h5>New Contact +</h5>
        <input type='text' placeholder="enter username"/>
      </div>
      <div className={mid_container + ' ' + border}>
        <h5>Name</h5>
        {/* <h5>Add</h5> */}
       <ContactList child={child} btn={btn} setDetails={setDetails} />
      </div>
      <div className={border + ' ' + rightside_container}>
        <p>{details}</p>
      </div>
    </div>
  )
}

export default Contacts