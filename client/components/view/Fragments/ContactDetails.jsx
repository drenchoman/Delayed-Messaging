import React from "react"; 
import { Link } from 'react-router-dom'
import styles from '../../../../server/public/styles/Buttons.module.css'

export default function ContactDetails({ details }) {
  const { name, newCorrespondence } = details
  const { btn_details, red, blue } = styles

    return(
      <div>
        <p>Name: {name}</p>
        <Link 
          className={`${btn_details} ${blue}`}
          to='/newcorrespondence'>
          {newCorrespondence}
        </Link>
        <Link 
          className={`${btn_details} ${blue}`}
          to='/'>
          {details.edit}
        </Link>
        <Link 
          className={`${btn_details} ${red}`}
          to='/'>
          {details.delete}
        </Link>
        <Link 
          className={`${btn_details} ${red}`}
          to='/'>
          {details.block}
        </Link>
      </div>
    )
    
}