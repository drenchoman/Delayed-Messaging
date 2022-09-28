import { React, useState, useEffect } from 'react'

import Letter from './Fragments/Letter'
import styles from '../../../server/public/styles/Recieved.module.css'
import { getAllViewableMessages } from '../../api'
import { updateMessageList } from '../../slices/messages'
import { useDispatch, useSelector } from 'react-redux'

function Recieved() {
  const [othersClicked, setOthersClicked] = useState(0)
  // const [letters, setLetters] = useState([])
  const dispatch = useDispatch()
  const letters = useSelector((state) => state.messages)

  const user = useSelector((state) => state.user)

  async function getMessages() {
    const messages = await getAllViewableMessages(user.username, user.token)
    dispatch(updateMessageList(messages.messages))
  }

  useEffect(() => {
    getMessages()
  }, [letters])

  const {
    // marginTop,
    // center,
    flex,
    exit_container,
    middleContainer,
    rightsideContainer,
    body,
  } = styles

  return (
    <div className={body}>
      <div className={flex}>
        <div className={middleContainer}>
          {letters?.length > 0 ? (
            letters.map((letter) => {
              return (
                <Letter
                  letter={letter}
                  id={letter.id}
                  key={letter.id}
                  othersClicked={othersClicked}
                  setOthersClicked={setOthersClicked}
                ></Letter>
              )
            })
          ) : (
            <div>
              <h2 className={styles.noneHeader}>No Recieved Messages</h2>
            </div>
          )}
        </div>
      </div>
      <div
        className={exit_container}
        onClick={() => {
          setOthersClicked(0)
        }}
      ></div>
    </div>
  )
}

export default Recieved
