import React from 'react'
import styles from '../../../../server/public/styles/Landing.module.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Nav from '../../Nav'
import inflight from '../../../../server/public/images/inflight.png'
export default function Landing() {
  return (
    <div className={styles.wrapper}>
      <Nav />

      <div className={styles.layout}>
        <div className={styles.sectionOne}>
          <div className={styles.sec1Left}>
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
        <div className={styles.sectionTwo}>
          <h2>Section 2</h2>
        </div>
        <div className={styles.sectionThree}>
          <h2>Section 3</h2>
        </div>
        <div className={styles.sectionFour}>
          <h2>Section 4</h2>
        </div>
      </div>
      <Footer />
    </div>
  )
}
