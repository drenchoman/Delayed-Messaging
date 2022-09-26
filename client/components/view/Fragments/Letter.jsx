import { React, useState } from 'react'
import styles from '../../../../server/public/styles/Recieved.module.css'

function Letter(props) {
  const [letterState, setLetterState] = useState('closed')

  const { closedLetter, border_top, flex } = styles

  const letter = props.letter

  const { sender_username, message, subject } = letter

  function closed() {
    setLetterState('closed')
  }

  function hover() {
    setLetterState('hover')
  }

  function open() {
    props.setOthersClicked(props.id)
    setLetterState('closed')
  }

  function closeOpened() {
    props.setOthersClicked(0)
    setLetterState('hover')
  }

  return (
    <>
      {props.othersClicked === 0 && (
        <>
          {letterState === 'closed' && (
            <div className={closedLetter} onMouseEnter={hover} onFocus={hover}>
              From: {sender_username}
            </div>
          )}
          {letterState === 'hover' && (
            <div className={border_top} onMouseLeave={closed} onClick={open}>
              <div className={flex}>
                <p>From: </p>
                <h3>{sender_username}</h3>
              </div>
              <div className={flex}>
                <p>Subject: </p>
                <h3>{subject}</h3>
              </div>
            </div>
          )}
        </>
      )}
      {props.othersClicked === props.id && (
        <div className={border_top} onClick={closeOpened}>
          <div className={flex}>
            <p>From: </p>
            <h3>{sender_username}</h3>
          </div>
          <div className={flex}>
            <p>Subject: </p>
            <h3>{subject}</h3>
          </div>
          <p style={{ whiteSpace: 'pre-line' }}>{message}</p>
        </div>
      )}
      {props.othersClicked !== props.id && props.othersClicked !== 0 && (
        <>
          {letterState === 'closed' && (
            <div
              className={closedLetter}
              onMouseEnter={hover}
              onFocus={hover}
            ></div>
          )}
          {letterState === 'hover' && (
            <div className={border_top} onMouseLeave={closed} onClick={open}>
              <div className={flex}>
                <p>From: </p>
                <h3>{sender_username}</h3>
              </div>
              <div className={flex}>
                <p>Subject: </p>
                <h3>{subject}</h3>
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Letter
