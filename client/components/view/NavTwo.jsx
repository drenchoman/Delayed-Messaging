import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../server/public/styles/NavTwo.module.css'
import { useSelector } from 'react-redux'
function NavTwo() {
  const { container, links, flex, anchor } = styles
  const user = useSelector((state) => state.user)
  return (
    <div className={container}>
      <nav className={flex}>
        <div className={links}>
          <Link
            className={anchor}
            to={`/correspondence/${user.username}/newcorrespondence`}
          >
            new
          </Link>
        </div>
        <div className={links}>
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
          <Link className={anchor} to="/">
            profile
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default NavTwo
