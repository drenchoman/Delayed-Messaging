import React, { useState } from 'react'
import NavTwo from './NavTwo'
import styles from '../../../server/public/styles/Recieved.module.css'

function Recieved() {
  const { body, hidden, show } = styles
  const [ hide, setHide ] = useState(hidden)

  const message = {
    sender: 'John',
    recipient: 'Elizabeth',
    subject: 'Things ',
    body: 'Dear Elizabeth \n\nI am so happy to hear your news,\n\nWhat else can you tell me?\n\nRegards \nJohn ',
  }

  function displayHandler() {
    (hide != show) ? setHide(show) : setHide(hidden)
  }

  return (
    <>
    <NavTwo />
    <div className={body}>
      <button></button>
      <button></button>
      <button onClick={displayHandler}>{message.sender}</button>
      <div  className={hide}>
        <h3>From: {message.sender}</h3>
        <h3>Subject: {message.subject}</h3>
        <p style={{ whiteSpace: 'pre-line' }}>{message.body}</p>
      </div>
      <button></button>
      <button></button>
      <button></button>
    </div>
    </>
  )
}

export default Recieved
