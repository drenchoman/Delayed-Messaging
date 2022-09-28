import { React, useState } from 'react'
import styles from '../../../../server/public/styles/Recieved.module.css'

function Letter(props) {
  const [letterState, setLetterState] = useState('closed')

  const {
    closedLetter,
    border_top,
    flex,
    hover_letter,
    open_letter_header,
    open_letter_body,
    letter_date,
  } = styles

  const letter = props.letter

  const hardcoded =
    'Steven, \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies ipsum eu ante aliquet interdum. Fusce ut ultrices nulla, at semper metus. \n\nDonec tempus eros nibh, sed vestibulum diam aliquet nec. Integer dignissim mauris est, at feugiat neque cursus et. Donec neque est, pharetra vitae nisl quis, cursus tristique sem. Praesent rhoncus purus at arcu pellentesque molestie non ullamcorper enim. Nam consequat lectus sed neque gravida finibus. Mauris pharetra, ex non malesuada aliquam, nibh purus luctus nisl, a condimentum eros turpis et dui. Praesent erat urna, sodales in commodo nec, condimentum volutpat dolor. Aliquam blandit sapien purus, sed rhoncus arcu commodo sit amet. Proin cursus, massa et lacinia condimentum, nisi mauris efficitur nunc, a commodo sapien sem pretium libero. Suspendisse vehicula et elit in lobortis. Proin scelerisque dui augue, ultricies dictum ante pellentesque sed.\n\nNam eget ultricies mi. Mauris non quam cursus, blandit arcu non, venenatis orci. Suspendisse porttitor tempor est sed maximus. Suspendisse odio sapien, vestibulum ut gravida a, placerat nec erat. Sed vulputate mattis ex at egestas. Sed feugiat rhoncus justo nec laoreet. Nullam pulvinar dui et libero egestas, a ultricies ex semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam euismod tellus vitae odio pharetra dignissim. Donec eu velit ligula. Nulla sem lectus, lobortis at ex in, efficitur tempus sapien. Praesent rutrum mi est, vel porta lacus tempor ut. Proin non elementum orci, viverra viverra ante. Aliquam erat volutpat. Donec nec placerat metus.\n\n\nKind Regards\n \nElizabeth'

  const { sender_username, message, subject, active_time } = letter

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

  function archiveBtn() {
    return (<button className={btn_letter}>save</button>)
  }

  return (
    <>
      {props.othersClicked === 0 && (
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
              <div className={hover_letter}>
                <p>{sender_username}</p>
                <span>
                  <i>{subject}</i>
                </span>
                <span className={letter_date}>{active_time}</span>
              </div>
            </div>
          )}
        </>
      )}
      {props.othersClicked === props.id && (
        <div className={border_top} onClick={closeOpened}>
          <div className={open_letter_header}>
            <p>{sender_username}</p>
            <span>
              <i>{subject}</i>
            </span>
            <div className={letter_date}>
              <span>{active_time}</span>
            </div>
          </div>
          <content
            className={open_letter_body}
            style={{ whiteSpace: 'pre-line' }}
          >
            {hardcoded}
          </content>
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
              <div className={hover_letter}>
                <p>{sender_username}</p>
                <span>
                  <i>{subject}</i>
                </span>
                <span className={letter_date}>{active_time}</span>
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Letter
