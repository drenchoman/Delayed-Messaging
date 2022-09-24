import React from "react"; 


export default function ContactDetails({ details }) {
  const { name, newCorrespondence } = details

     return(
      <div>
        <p>Name: {name}</p>
        <button>{newCorrespondence}</button>
        <button>{details.edit}</button>
        <button>{details.delete}</button>
        <button>{details.block}</button>
      </div>
      )
    
}