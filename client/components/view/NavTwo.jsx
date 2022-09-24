import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../server/public/styles/NavTwo.module.css'

function NavTwo() {
  const { links, flex, anchor } = styles

  return (
    <div>
      <nav className={flex}>
        <div className={links}>
          <Link className={anchor} to='/newcorrespondence'>new</Link>
          </div>
        <div className={links}>
          <Link className={anchor} to='/recieved'>recieved</Link>
        </div>
        <div className={links}>
          <Link className={anchor} to='/contacts'>contacts</Link>
        </div>
        <div className={links}>
          <Link className={anchor} to='/archive'>archives</Link>
        </div>
        <div className={styles.links}>
          <Link className={anchor} to='/'>profile</Link></div>
      </nav>
    </div>
  )
}

export default NavTwo
