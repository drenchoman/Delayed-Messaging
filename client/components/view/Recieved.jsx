<<<<<<< HEAD
import { React, useState } from 'react'
import { useSelector } from 'react-redux'
=======
import { React, useState, useEffect } from 'react'
>>>>>>> d492e5ba6241d859217eadf3790ea3f0e34ba693

import Letter from './Fragments/Letter'
import NavTwo from './NavTwo'
import styles from '../../../server/public/styles/Recieved.module.css'

function Recieved() {
  const [state, setState] = useState(0)

  const user = useSelector((state) => {
    state.user
  })

  const messages = []

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
