import { React, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Letter from './Fragments/Letter'
import NavTwo from './NavTwo'
import styles from '../../../server/public/styles/Recieved.module.css'
import { getAllViewableMessages } from '../../api'

function Recieved() {
  const [othersClicked, setOthersClicked] = useState(0)
  const [letters, setLetters] = useState([])

  const user = useSelector((state) => state.user)

  useEffect(() => {
    getAllViewableMessages(user.username, user.token)
      .then((res) => {
        const letters = res.messages
        setLetters(letters)
      })
      .catch((err) => console.error(err))
  }, [])

  const {
    // marginTop,
    // center,
    flex,
    leftsideContainer,
    middleContainer,
    rightsideContainer,
    body
  } = styles

  return (
    <div className={body}>
      <NavTwo />
      <div className={flex}>
        <div className={leftsideContainer}></div>
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
        <div
          className={rightsideContainer}
          onClick={() => {
            setOthersClicked(0)
          }}
        ></div>
      </div>
    </div>
  )
}

export default Recieved
