import { React, useState } from 'react'
import styles from '../../../../server/public/styles/Recieved.module.css'

function Letter(props) {
  const [letterState, setLetterState] = useState('closed')

  const { closedLetter, border_top, flex } = styles

  const message = props.message

  function closed() {
    setLetterState('closed')
  }

  function hover() {
    setLetterState('hover')
  }

  function open() {
    props.setState(props.id)
    setLetterState('closed')
  }

  function closeOpened() {
    props.setState(0)
    setLetterState('hover')
  }

  return (
    <>
      {props.state === 0 && (
        <>
          {letterState === 'closed' && (
            <div
              className={closedLetter}
              onMouseEnter={hover}
              onFocus={hover}
            >From: {message.sender}</div>
          )}
          {letterState === 'hover' && (
            <div
              className={border_top}
              onMouseLeave={closed}
              onClick={open}
            >
              <div className={flex}>
                <p>From: </p>
                <h3>{message.sender}</h3>
              </div>
              <div className={flex}>
                <p>Subject: </p>
                <h3>{message.subject}</h3>
              </div>
            </div>
          )}
        </>
      )}
      {props.state === props.id && (
        <div className={border_top} onClick={closeOpened}>
           <div className={flex}>
              <p>From: </p>
              <h3>{message.sender}</h3>
            </div>
            <div className={flex}>
              <p>Subject: </p>
              <h3>{message.subject}</h3>
            </div>
          <p style={{ whiteSpace: 'pre-line' }}>{message.body}</p>
        </div>
      )}
      {props.state !== props.id && props.state !== 0 && (
        <>
          {letterState === 'closed' && (
            <div
              className={closedLetter}
              onMouseEnter={hover}
              onFocus={hover}
            ></div>
          )}
          {letterState === 'hover' && (
            <div
              className={border_top}
              onMouseLeave={closed}
              onClick={open}
            >
            <div className={flex}>
              <p>From: </p>
              <h3>{message.sender}</h3>
            </div>
            <div className={flex}>
              <p>Subject: </p>
              <h3>{message.subject}</h3>
            </div>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Letter
