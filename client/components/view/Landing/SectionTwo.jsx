import React from 'react'
import styles from '../../../../server/public/styles/Landing.module.css'
import Card from './Card'
import face from '../../../../server/public/images/svg/face.svg'
import friend from '../../../../server/public/images/svg/friend.svg'
import mail from '../../../../server/public/images/svg/mail.svg'
import flock from '../../../../server/public/images/inflight.png'
import wind from '../../../../server/public/images/svg/wind.svg'
import { useInView } from 'react-intersection-observer'

export default function SectionTwo() {
  const { ref, inView, entry } = useInView()

  return (
    <div className={styles.sectionTwo}>
      <div className={styles.flockWrapper}>
        <img src={flock} alt="flock of birds"></img>
      </div>
      <h2 className={styles.sec2header}>Easy as 1 2 3</h2>
      <div className={styles.benefitsWrapper}>
        <Card
          image={face}
          header="Benefit One"
          feature="Big feature and lots of benefits and this will change your life probably"
        />
        <Card
          image={mail}
          header="Benefit One"
          feature="Big feature and lots of benefits"
        />
        <Card
          image={friend}
          header="Benefit One"
          feature="Big feature and lots of benefits"
        />
      </div>
      <div
        ref={ref}
        className={`${styles.windWrapper} ${inView ? styles.zoom : styles.out}`}
      >
        <img src={wind} alt="windy"></img>
      </div>
    </div>
  )
}
