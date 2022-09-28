import React, { useState, useEffect } from 'react'
import NavTwo from './NavTwo'
import styles from '../../../server/public/styles/Recieved.module.css'
import Letter from './Fragments/Letter'
import { getAllArchivedMessages } from '../../api'
import { useSelector } from 'react-redux'

function Archive() {
  const { flex, leftsideContainer, middleContainer } = styles
  const [othersClicked, setOthersClicked] = useState(0)
  const [letters, setLetters] = useState([])
  const user = useSelector((state) => state.user)

  useEffect(async () => {
    getAllArchivedMessages(user.username, user.token)
      .then((letters) => {
        setLetters(letters)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <NavTwo />
      <div className={flex}>
        <div className={leftsideContainer}></div>
        <div className={middleContainer}>
          {letters.length > 0 ? (
            letters.map((letter) => {
              return (
                <Letter
                  letter={letter}
                  id={letter.id}
                  key={letter.id}
                  othersClicked={othersClicked}
                  setOthersClicked={setOthersClicked}
                  archiv={true}
                ></Letter>
              )
            })
          ) : (
            <div>
              <h2 className={styles.noneHeader}>No Archived Messages</h2>{' '}
            </div>
          )}

          <div
            style={{ height: '700px' }}
            onClick={() => {
              setOthersClicked(0)
            }}
          ></div>
        </div>
        <div className={styles.rightsideContainer}></div>
      </div>
    </>
  )
}

export default Archive
