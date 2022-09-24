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
    <div>
      {props.state === 0 && (
        <div>
          {letterState === 'closed' && (
            <div
              style={{ height: '50px', width: '100%', border: '5px solid red' }}
              onMouseEnter={hover}
              onFocus={hover}
            ></div>
          )}
          {letterState === 'hover' && (
            <div
              style={{ border: '5px solid red' }}
              onMouseLeave={closed}
              onClick={open}
            >
              <h3>From: {message.sender}</h3>
              <h3>Subject: {message.subject}</h3>
            </div>
          )}
        </div>
      )}
      {props.state === props.id && (
        <div style={{ border: '5px solid red' }} onClick={closeOpened}>
          <h3>From: {message.sender}</h3>
          <h3>Subject: {message.subject}</h3>
          <p style={{ whiteSpace: 'pre-line' }}>{message.body}</p>
        </div>
      )}
      {props.state !== props.id && props.state !== 0 && (
        <>
          {letterState === 'closed' && (
            <div
              style={{ height: '50px', width: '100%', border: '5px solid red' }}
              onMouseEnter={hover}
              onFocus={hover}
            ></div>
          )}
          {letterState === 'hover' && (
            <div
              style={{ border: '5px solid red' }}
              onMouseLeave={closed}
              onClick={open}
            >
              <h3>From: {message.sender}</h3>
              <h3>Subject: {message.subject}</h3>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Letter
