import React from 'react'
import styles from '../../../../server/public/styles/Landing.module.css'
import Card from './Card'
import face from '../../../../server/public/images/svg/face.svg'
import friend from '../../../../server/public/images/svg/friend.svg'
import mail from '../../../../server/public/images/svg/mail.svg'
import flock from '../../../../server/public/images/inflight.png'
import wind from '../../../../server/public/images/svg/wind.svg'

export default function SectionTwo() {
  return (
    <div className={styles.sectionTwo}>
      <div className={styles.flockWrapper}>
        <img src={flock} alt="flock of birds"></img>
      </div>
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
      <div className={styles.windWrapper}>
        <img src={wind} alt="windy"></img>
      </div>
    </div>
  )
}
