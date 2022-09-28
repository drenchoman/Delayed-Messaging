import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../server/public/styles/NavTwo.module.css'
import { useSelector } from 'react-redux'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import Theme from './Fragments/Theme'

function NavTwo() {
  const { container, links, flex, anchor, blur } = styles
  const { logout } = useAuth0()

  const user = useSelector((state) => state.user)
  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }
  const [blurNewCorres, setBlurNewCorres] = useState(anchor)
  const blurNC = () => setBlurNewCorres(`${anchor} ${blur}`)
  console.log('20')
  return (
    <div className={container}>
      <nav className={flex}>
        <Theme />
        <div className={links}>
          <Link
            className={blurNewCorres}
            to={`/correspondence/${user.username}/newcorrespondence`}
          >
            new
          </Link>
        </div>
        <div className={links} onClick={blurNC}>
          <Link
            className={anchor}
            to={`/correspondence/${user.username}/recieved`}
          >
            recieved
          </Link>
        </div>
        <div className={links}>
          <Link
            className={anchor}
            to={`/correspondence/${user.username}/contacts`}
          >
            contacts
          </Link>
        </div>
        <div className={links}>
          <Link
            className={anchor}
            to={`/correspondence/${user.username}/archive`}
          >
            archives
          </Link>
        </div>
        <div className={styles.links}>
          <IfAuthenticated>
            <Link className={anchor} to="/" onClick={handleLogoff}>
              log out
            </Link>
          </IfAuthenticated>
        </div>
      </nav>
    </div>
  )
}

export default NavTwo
