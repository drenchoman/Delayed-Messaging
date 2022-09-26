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

  const { marginTop, center } = styles

  return (
    <>
      <NavTwo />
      <div className={center}>
        <div className={marginTop}>
          {letters.map((letter) => {
            return (
              <Letter
                letter={letter}
                id={letter.id}
                key={letter.id}
                othersClicked={othersClicked}
                setOthersClicked={setOthersClicked}
              ></Letter>
            )
          })}
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

export default Recieved
