import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../server/public/styles/NavTwo.module.css'


function NavTwo() {
  

  return (
    <div>
      <nav className={styles.flex}>
        <div className={styles.links}>
          <Link className={styles.anchor} to='/corresponde'>new</Link>
          </div>
        <div className={styles.links}>
          <Link className={styles.anchor} to='/recieved'>recieved</Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.anchor} to='/contacts'>contacts</Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.anchor} to='/archive'>archives</Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.anchor} to='/'>profile</Link></div>
      </nav>
    </div>
  )
}

export default NavTwo
