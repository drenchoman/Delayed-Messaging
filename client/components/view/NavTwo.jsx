import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../server/public/styles/NavTwo.module.css'

function NavTwo() {
  const { container, links, flex, anchor } = styles

  return (
    <div className={container}>
      <nav className={flex}>
        <div className={links}>
          <Link className={anchor} to='/correspondence/:userid/newcorrespondence'>new</Link>
        </div>
        <div className={links}>
          <Link className={anchor} to='/correspondence/:userid/recieved'>recieved</Link>
        </div>
        <div className={links}>
          <Link className={anchor} to='/correspondence/:userid/contacts'>contacts</Link>
        </div>
        <div className={links}>
          <Link className={anchor} to='/correspondence/:userid/archive'>archives</Link>
        </div>
        <div className={styles.links}>
          <Link className={anchor} to='/'>profile</Link></div>
      </nav>
    </div>
  )
}

export default NavTwo
