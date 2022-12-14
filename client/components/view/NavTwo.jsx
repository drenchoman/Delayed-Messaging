import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../server/public/styles/NavTwo.module.css'
import { useSelector } from 'react-redux'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import Theme from './Fragments/Theme'

function NavTwo() {
  const { container, links, flex, anchor, blur} = styles
  const { logout } = useAuth0()

  const user = useSelector((state) => state.user)
  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }

  const [blurNewCorres, setBlurNewCorres] = useState(anchor)
  const [blurRecieve, setBlurRecieve] = useState(anchor)
  const [blurContacts, setBlurContacts] = useState(anchor)
  const [blurArchive, setBlurArchive] = useState(anchor)
  const [blurLog, setBlurLog] = useState(anchor)

  const blurNC = () => {
    setBlurNewCorres(anchor)
    setBlurRecieve(`${anchor} ${blur}`)
    setBlurContacts(`${anchor} ${blur}`)
    setBlurArchive(`${anchor} ${blur}`)
    setBlurLog(`${anchor} ${blur}`)
  }
  
  const blurR = () => {
    setBlurNewCorres(`${anchor} ${blur}`)
    setBlurRecieve(anchor)
    setBlurContacts(`${anchor} ${blur}`)
    setBlurArchive(`${anchor} ${blur}`)
    setBlurLog(`${anchor} ${blur}`)
  }

  const blurC = () => {
    setBlurNewCorres(`${anchor} ${blur}`)
    setBlurRecieve(`${anchor} ${blur}`)
    setBlurContacts(anchor)
    setBlurArchive(`${anchor} ${blur}`)
    setBlurLog(`${anchor} ${blur}`)
  }

  const blurA = () => {
    setBlurNewCorres(`${anchor} ${blur}`)
    setBlurRecieve(`${anchor} ${blur}`)
    setBlurContacts(`${anchor} ${blur}`)
    setBlurArchive(anchor)
    setBlurLog(`${anchor} ${blur}`)
  }

  return (
    <div className={container}>
      <nav className={flex}>
        <Theme />
        <div 
          className={links}>
          <Link
            className={blurNewCorres}
            onClick={blurNC}
            to={`/correspondence/${user.username}/newcorrespondence`}
          >
            New Correspondence
          </Link>
        </div>
        <div className={links}>
          <Link
            className={blurRecieve}
            onClick={blurR}
            to={`/correspondence/${user.username}/recieved`}
          >
            Recieved
          </Link>
        </div>
        <div className={links}>
          <Link
            className={blurContacts}
            onClick={blurC}
            to={`/correspondence/${user.username}/contacts`}
          >
            Contacts
          </Link>
        </div>
        <div className={links}>
          <Link
            className={blurArchive}
            onClick={blurA}
            to={`/correspondence/${user.username}/archive`}
          >
            Archives
          </Link>
        </div>
        <div className={styles.links}>
          <IfAuthenticated>

            <Link className={blurLog} to="/" onClick={handleLogoff}>
              Log out

            </Link>
          </IfAuthenticated>
        </div>
      </nav>
    </div>
  )
}

export default NavTwo
