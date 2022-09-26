import React from "react";
import ContactBtn from "./ContactBtn";
import {getAllContacts} from '../../../api.js'
import { useEffect } from "react";
import { useState } from "react";
 
export default function ContactList({ child, setDetails }) {

  const [list, setList] = useState([])

  async function getContacts() {
    const contacts = await getAllContacts('auth0|123')
    setList(contacts)
  }

  useEffect(() => getContacts(),[])

  return (
    <>
      {list.map( arr => {
        const { id, name } = arr        
        return (
          <div key={id} className={child} >
            <p>{name}</p>
            <ContactBtn name={name} setDetails={setDetails} />
          </div>
        )
      })}
    </>
  )
}

