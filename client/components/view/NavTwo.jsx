import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../server/public/styles/NavTwo.module.css'
import { useSelector } from 'react-redux'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import Theme from './Fragments/Theme'

function NavTwo() {
  const { container, links, flex, anchor, theme } = styles
  const { logout } = useAuth0()

  const user = useSelector((state) => state.user)
  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }
  return (
    <div className={container}>
      <nav className={flex}>
        <Theme />
        <div className={links}>
          <Link
            className={anchor}
            to={`/correspondence/${user.username}/newcorrespondence`}
          >
            New Correspondence
          </Link>
        </div>
        <div className={links}>
          <Link
            className={anchor}
            to={`/correspondence/${user.username}/recieved`}
          >
            Recieved
          </Link>
        </div>
        <div className={links}>
          <Link
            className={anchor}
            to={`/correspondence/${user.username}/contacts`}
          >
            Contacts
          </Link>
        </div>
        <div className={links}>
          <Link
            className={anchor}
            to={`/correspondence/${user.username}/archive`}
          >
            Archives
          </Link>
        </div>
        <div className={styles.links}>
          <IfAuthenticated>
            <Link className={anchor} to="/" onClick={handleLogoff}>
              Log out
            </Link>
          </IfAuthenticated>
        </div>
      </nav>
    </div>
  )
}

export default NavTwo
