import React from "react";

export default function ContactList({child,btn}) {

  const list = [
    'Elizabeth',
    'Samuel',
    'Keagan',
    'Daniel',
    'Gracie',
    'Bryden',
    'Livingston',
    'Oscar'
  ]

  const btns = <button className={btn}>...</button>

  return (
    <>
      {list.map( name => {
        return (
          <div key={name} className={child} >
            <p>{name}</p>
            <div>{btns}</div>
          </div>
        )
      })}
    </>
  )
}

