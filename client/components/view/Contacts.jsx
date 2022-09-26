import React, { useState } from "react";
import styles from '../../../server/public/styles/Contacts.module.css'
import { addContact } from "../../api";

import NavTwo from "./NavTwo";
import ContactList from "./Fragments/ContactList";
import ContactDetails from "./Fragments/ContactDetails";
import ContactAdd from './Fragments/ContactAdd';

function Contacts() {
  const { flex, 
    mid_container, 
    border, 
    rightside_container,
    leftside_container, 
    child, 
    btn,
    add_contact
  } = styles

  const [ details, setDetails ] = useState({
    name: '',
    newCorrespondence: 'New Correspondence',
    edit: 'Edit',
    delete: 'Delete',
    block: 'Block'
  })

  function displayDetail() {
    // console.log(details.name.length);
    if (details.name.length > 1) {
      return <ContactDetails details={details}/>
    }
  }

  
  
  return (
    <>
    <NavTwo />
    <div className={flex}>
      <div className={border + ' ' + leftside_container}>
        <ContactAdd add_contact={add_contact} />
      </div>
      <div className={mid_container + ' ' + border}>
        <h5>Name</h5>
        {/* <h5>Add</h5> */}
       <ContactList child={child} btn={btn} setDetails={setDetails} />
      </div>
      <div className={border + ' ' + rightside_container}>
        {displayDetail()}
      </div>
    </div>
    </>
  )
} 

export default Contacts