import React, { useState, useEffect } from 'react'
import styles from '../../../../server/public/styles/Landing.module.css'
import { useAuth0 } from '@auth0/auth0-react'

export default function SectionFive() {
  const { logout, loginWithRedirect } = useAuth0()

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <div className={styles.sectionFive}>
      <div className={styles.sec5Left}>
        <h3 className={styles.sec5Header}>
          Escape Instant Messaging And Begin Crafting Your Correspondence Today
        </h3>
        <button onClick={handleSignIn} className={styles.ctaButton2}>
          Create
        </button>
      </div>
      <div className={styles.sec5Right}></div>
    </div>
  )
}
