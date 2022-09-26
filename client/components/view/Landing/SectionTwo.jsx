import React from 'react'
import styles from '../../../../server/public/styles/Landing.module.css'
import Card from './Card'
import face from '../../../../server/public/images/svg/face.svg'
import friend from '../../../../server/public/images/svg/friend.svg'
import mail from '../../../../server/public/images/svg/mail.svg'
import flock from '../../../../server/public/images/inflight.png'
import { useInView } from 'react-intersection-observer'
import Wind from './Wind'

export default function SectionTwo() {
  const { ref, inView, entry } = useInView()

  return (
    <div className={styles.sectionTwo}>
      <div className={styles.flockWrapper}>
        <img src={flock} alt="flock of birds"></img>
      </div>
      <h2
        ref={ref}
        className={`${styles.sec2header} ${
          inView ? styles.show : styles.hidden
        }`}
      >
        Correspondence Is Simple
      </h2>
      <div className={styles.benefitsWrapper}>
        <Card
          image={mail}
          header="Craft Your Message"
          feature="Our minimal design keeps things simple and helps you focus"
        />
        <Card
          image={friend}
          header="Choose a Recipient"
          feature="Perfect for those people whom you love but are far away from."
        />
        <Card
          image={face}
          header="Relax"
          feature="Our unique delay function means messages arrive when they need to."
        />
      </div>
      <Wind />
    </div>
  )
}
