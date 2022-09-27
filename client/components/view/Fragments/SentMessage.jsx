import React from 'react'
import styles from '../../../../server/public/styles/Animation.module.css'

export default function SentMessage() {
  return (
    <div className={styles.sentMessage}>
      <h2>Your message has been sent.</h2>
    </div>
  )
}
