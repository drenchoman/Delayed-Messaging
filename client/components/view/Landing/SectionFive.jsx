import React, { useState, useEffect } from 'react'
import styles from '../../../../server/public/styles/Landing.module.css'

export default function SectionFive() {
  return (
    <div className={styles.sectionFive}>
      <div className={styles.sec5Left}>
        <h3 className={styles.sec5Header}>
          Escape Instant Messaging And Begin Crafting Your Correspondence Today
        </h3>
        <button className={styles.ctaButton}>Create</button>
      </div>
      <div className={styles.sec5Right}></div>
    </div>
  )
}
