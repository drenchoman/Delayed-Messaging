import React from 'react'
import styles from '../../../../server/public/styles/Landing.module.css'
import { useInView } from 'react-intersection-observer'

export default function SectionOne() {
  const { ref, inView, entry } = useInView()

  return (
    <div ref={ref} className={styles.sectionOne}>
      <div
        className={`${styles.sec1Left} ${inView ? styles.show : styles.hidden}`}
      >
        <div className={styles.landingCta}>
          <h1 className={styles.header}>Messaging As It Was Intended</h1>
          <p className={styles.ctaText}>
            Thoughtful communication for a hyper-connected world
          </p>
          <button className={styles.ctaButton}>Create</button>
        </div>
      </div>

      <div className={styles.sec1Right}>
        <div className={styles.sec1ImageWrapper}>
          <img
            className={styles.sec1Image}
            src="https://i.giphy.com/media/lS1whBfE1vGiYDRiRe/giphy.webp"
            alt="Birds in flight"
          ></img>
        </div>
      </div>
    </div>
  )
}
