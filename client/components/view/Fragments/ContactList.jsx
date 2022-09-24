import React from "react";
import ContactBtn from "./ContactBtn";

export default function ContactList({ child }) {

  const list = [
    'Elizabeth',
    'Samuel',
    'Keagan',
    'Daniel',
    'Gracie',
    'Bryden',
    'Livingston',
    'Oscar',
    'Elizabet1',
    'Samuel1',
    'Keagan1',
    'Daniel1',
    'Gracie1',
    'Bryden1',
    'Livingston1',
    'Oscar1',
    'Elizabeth2',
    'Samuel2',
    'Keagan2',
    'Daniel2',
    'Gracie2',
    'Bryden2',
    'Livingston2',
    'Oscar2',
    'Elizabeth3',
    'Samuel3',
    'Keagan3',
    'Daniel3',
    'Gracie3',
    'Bryden3',
    'Livingston3',
    'Oscar3',
    'Elizabeth4',
    'Samuel4',
    'Keagan4',
    'Daniel4',
    'Gracie4',
    'Bryden4',
    'Livingston4',
    'Oscar4'
  ]

  return (
    <>
      {list.map( name => {        
        return (
          <div key={name} className={child} >
            <p>{name}</p>
            <ContactBtn name={name} />
          </div>
        )
      })}
    </>
  )
}

