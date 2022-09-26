import React from 'react'
import styles from '../../server/public/styles/Landing.module.css'
import bird from '../../server/public/images/svg/bird.svg'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Nav() {
  const user = useSelector((state) => state.user)

  const { logout, loginWithRedirect } = useAuth0()
  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <>
      <nav className={styles.nav}>
        <Link to="/">
          <div className={styles.logoWrapper}>
            <img className={styles.logo} src={bird} alt="Logo" />
          </div>
        </Link>
        <IfAuthenticated>
          <Link to="/" onClick={handleLogoff}>
            Log off
          </Link>
          <p>
            <span role="img" alt={user?.icon}>
              {user?.icon}
            </span>
            {' ' + user.username}
          </p>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Link className={styles.loginOption} to="/" onClick={handleSignIn}>
            Sign In
          </Link>
        </IfNotAuthenticated>
      </nav>
    </>
  )
}

export default Nav
