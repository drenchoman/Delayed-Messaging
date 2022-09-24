import React from 'react'
import styles from '../../../../server/public/styles/Landing.module.css'
import { useInView } from 'react-intersection-observer'

export default function Card({ image, header, feature }) {
  const { ref, inView, entry } = useInView()

  return (
    <div
      ref={ref}
      className={`${styles.benefitCard} ${
        inView ? styles.show : styles.hidden
      }`}
    >
      <div className={styles.benefitCardTop}>
        <div className={styles.cardImageWrapper}>
          <img className={styles.cardImage} src={image} alt="Hello"></img>
        </div>
      </div>
      <div className={styles.benefitCardBottom}>
        <h2>{header}</h2>
        <p>{feature}</p>
      </div>
    </div>
  )
}
