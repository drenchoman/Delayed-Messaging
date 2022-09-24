import React from 'react'
import styles from '../../../../server/public/styles/Landing.module.css'

export default function Testimonial({ test }) {
  return (
    <div className={styles.testiCard}>
      <div className={styles.testiImageWrapper}>
        <img src={test.image} alt="Beautiful Face"></img>
      </div>
      <h3 className={styles.testiHeader}>{test.name}</h3>
      <p className={styles.testiMessage}>{test.message}</p>
    </div>
  )
}
