import React from "react";
import styles from '../../../server/public/styles/Contacts.module.css'

import ContactList from "./Fragments/ContactList";

function Contacts() {
  console.log('contact page working');

  const { flex, 
    mid_container, 
    border, 
    side_container, 
    child, 
    btn } = styles

  return (
    <div className={flex}>
      <div className={border + ' ' + side_container}>
        <h5>New Contact +</h5>
        <input type='text' placeholder="enter username"/>
      </div>
      <div className={mid_container + ' ' + border}>
        <h5>Name</h5>
        {/* <h5>Add</h5> */}
       <ContactList child={child} btn={btn} />
      </div>
      <div className={border + ' ' + side_container}>
      </div>
    </div>
  )
}

export default Contacts