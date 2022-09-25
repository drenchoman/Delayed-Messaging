import React from 'react'
import styles from '../../../../server/public/styles/Landing.module.css'
import relax from '../../../../server/public/images/relax.png'
import { useInView } from 'react-intersection-observer'

export default function SectionThree() {
  const { ref, inView, entry } = useInView()
  return (
    <div className={styles.sectionThree}>
      <div
        ref={ref}
        className={`${styles.secThreeLeft} ${
          inView ? styles.show : styles.hidden
        }`}
      >
        <div className={styles.secThreeImageWrapper}>
          <img className={styles.relaxImage} src={relax}></img>
        </div>
      </div>
      <div
        ref={ref}
        className={`${styles.secThreeRight} ${
          inView ? styles.show : styles.hidden
        }`}
      >
        <h2 className={styles.threeHeader}>
          No Hassle. No Obligations. No Stress.
        </h2>
        <p className={styles.threeTalk}>
          Messages arrive when they need to so you can relax and take your time.
        </p>
        <p className={styles.threeTalk}>
          Reply when you need to. There are no expectations.{' '}
        </p>
      </div>
    </div>
  )
}
