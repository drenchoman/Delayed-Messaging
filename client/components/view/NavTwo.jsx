import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../server/public/styles/NavTwo.module.css'

function NavTwo() {
  return (
    <div>
      <nav className={styles.flex}>
        <div className={styles.links}>
          <Link className={styles.anchor} to="/NewCorrespondence">
            New Correspondence
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.anchor} to="/">
            recieved
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.anchor} o="/">
            contacts
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.anchor} to="/">
            archives
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.anchor} to="/">
            profile
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default NavTwo
