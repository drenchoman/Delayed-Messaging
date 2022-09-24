import { React, useState } from 'react'

function Letter(props) {
  const [letterState, setLetterState] = useState('closed')

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
              style={{
                height: '50px',
                width: '100%',
                borderTop: '5px solid black',
              }}
              onMouseEnter={hover}
              onFocus={hover}
            ></div>
          )}
          {letterState === 'hover' && (
            <div
              style={{ borderTop: '5px solid black' }}
              onMouseLeave={closed}
              onClick={open}
            >
              <h3>From: {message.sender}</h3>
              <h3>Subject: {message.subject}</h3>
            </div>
          )}
        </>
      )}
      {props.state === props.id && (
        <div style={{ borderTop: '5px solid black' }} onClick={closeOpened}>
          <h3>From: {message.sender}</h3>
          <h3>Subject: {message.subject}</h3>
          <p style={{ whiteSpace: 'pre-line' }}>{message.body}</p>
        </div>
      )}
      {props.state !== props.id && props.state !== 0 && (
        <>
          {letterState === 'closed' && (
            <div
              style={{
                height: '50px',
                width: '100%',
                borderTop: '5px solid black',
              }}
              onMouseEnter={hover}
              onFocus={hover}
            ></div>
          )}
          {letterState === 'hover' && (
            <div
              style={{ borderTop: '5px solid black' }}
              onMouseLeave={closed}
              onClick={open}
            >
              <h3>From: {message.sender}</h3>
              <h3>Subject: {message.subject}</h3>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Letter
