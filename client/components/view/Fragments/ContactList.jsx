import React from "react";
import ContactBtn from "./ContactBtn";

import { useSelector } from "react-redux";

 
export default function ContactList({ child, setDetails }) {
  const list = useSelector(state => state.contacts)
  console.log(list);


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

