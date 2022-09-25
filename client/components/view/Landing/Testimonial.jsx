import React from 'react'
import styles from '../../../../server/public/styles/Landing.module.css'
import right from '../../../../server/public/images/svg/right.svg'
import left from '../../../../server/public/images/svg/left.svg'

export default function Testimonial({
  test,
  handleRightClick,
  handleLeftClick,
  activeCard,
}) {
  return (
    <div className={styles.testiCard}>
      <div onClick={handleRightClick} className={styles.rightArrow}>
        <img src={right} alt="right"></img>
      </div>
      <div onClick={handleLeftClick} className={styles.leftArrow}>
        <img src={left} alt="right"></img>
      </div>
      <div className={styles.testiInfo}>
        <div className={styles.testiImageWrapper}>
          <img src={test.image} alt="Beautiful Face"></img>
        </div>
        <h3 className={styles.testiHeader}>{test.name}</h3>
        <p className={styles.testiMessage}>{test.message}</p>
      </div>
    </div>
  )
}
