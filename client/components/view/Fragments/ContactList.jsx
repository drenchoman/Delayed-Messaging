import React from "react";
import ContactBtn from "./ContactBtn";
 
export default function ContactList({ list, child, setDetails }) {

 const isName = (name, username) => (name) ? name : username

  return (
    <>
      {list.map( arr => {
        const { id, name, username } = arr        
        return (
          <div key={id} className={child} >
            <p>{isName(name,username)}</p>
            <ContactBtn name={name} setDetails={setDetails} />
          </div>
        )
      })}
    </>
  )
}

