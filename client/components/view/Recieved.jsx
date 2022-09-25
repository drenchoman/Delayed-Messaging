import { React, useState } from 'react'

import Letter from './Fragments/Letter'
import NavTwo from './NavTwo'
import styles from '../../../server/public/styles/Recieved.module.css'

function Recieved() {
  const [state, setState] = useState(0)
  const messages = [
    {
      id: 1,
      sender: 'John',
      recipient: 'Elizabeth',
      subject: 'Things ',
      body: 'Dear Elizabeth \n\nI am so happy to hear your news,\n\nWhat else can you tell me?\n\nRegards \nJohn ',
    },
    {
      id: 2,
      sender: 'Elizabeth',
      recipient: 'John',
      subject: 'Things ',
      body: 'Dear Elizabeth \n\nI am so happy to hear your news,\n\nWhat else can you tell me?\n\nRegards \nJohn ',
    },
    {
      id: 3,
      sender: 'Samuel',
      recipient: 'Elizabeth',
      subject: 'Things ',
      body: 'Dear Elizabeth \n\nI am so happy to hear your news,\n\nWhat else can you tell me?\n\nRegards \nJohn ',
    },
  ]

  const { marginTop, center } = styles

  return (
    <>
      <NavTwo />
    <div className={center}>
      <div className={marginTop}>
        {messages.map((message) => {
          return (
            <Letter
              message={message}
              id={message.id}
              key={message.id}
              state={state}
              setState={setState}
            ></Letter>
          )
        })}
      </div>
      <div
        style={{ height: '700px' }}
        onClick={() => {
          setState(0)
        }}
      ></div>
    </div>
    </>
  )
}

export default Recieved
