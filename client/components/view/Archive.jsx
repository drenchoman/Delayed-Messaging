import React, { useState, useEffect } from 'react'
import NavTwo from './NavTwo'
import styles from '../../../server/public/styles/Recieved.module.css'
import Letter from './Fragments/Letter'
import { getAllArchivedMessages } from '../../api'
import { useSelector } from 'react-redux'

function Archive() {
  const { marginTop, center, empty } = styles
  const [state, setState] = useState(0)
  const [messages, setMessages] = useState([])
  const user = useSelector((state) => state.user)

  useEffect(async () => {
    const messages = getAllArchivedMessages(user.username)
    setMessages(messages)
  }, [])

  return (
    <>
      <NavTwo />
      <div className={center}>
        <div className={marginTop}>
          {messages.length > 0 ? (
            messages.map((message) => {
              return (
                <Letter
                  message={message}
                  id={message.id}
                  key={message.id}
                  state={state}
                  setState={setState}
                ></Letter>
              )
            })
          ) : (
            <div className={empty}>No Archived Messages </div>
          )}
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

export default Archive
