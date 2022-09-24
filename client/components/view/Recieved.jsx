import React from 'react'
import NavTwo from './NavTwo'

function Recieved() {
  const message = {
    sender: 'John',
    recipient: 'Elizabeth',
    subject: 'Things ',
    body: 'Dear Elizabeth \n\nI am so happy to hear your news,\n\nWhat else can you tell me?\n\nRegards \nJohn ',
  }

  return (
    <>
    <NavTwo />
    <div>
      <h3>From: {message.sender}</h3>
      <h3>Subject: {message.subject}</h3>
      <p style={{ whiteSpace: 'pre-line' }}>{message.body}</p>
    </div>
    </>
  )
}

export default Recieved
