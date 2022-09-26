import React, { useState, useEffect } from 'react'
import NavTwo from './NavTwo'
import styles from '../../../server/public/styles/Recieved.module.css'
import Letter from './Fragments/Letter'
import { getAllArchivedMessages } from '../../api'
import { useSelector } from 'react-redux'

function Archive() {
  const { marginTop, center } = styles
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

  console.log('Letters length', letters?.length, letters)

  return (
    <>
      <NavTwo />
      <div className={center}>
        <div className={marginTop}>
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
            <div>No Archived Messages </div>
          )}
        </div>
        <div
          style={{ height: '700px' }}
          onClick={() => {
            setOthersClicked(0)
          }}
        ></div>
      </div>
    </>
  )
}

export default Archive
