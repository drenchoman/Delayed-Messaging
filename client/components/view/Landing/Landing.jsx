import React from 'react'
import styles from '../../../../server/public/styles/Landing.module.css'
import Footer from './Footer'
import Nav from '../../Nav'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
export default function Landing() {
  return (
    <div className={styles.wrapper}>
      <Nav />

      <div className={styles.layout}>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
      <Footer />
    </div>
  )
}
