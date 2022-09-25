import React, { useState, useEffect } from 'react'
import styles from '../../../../server/public/styles/Landing.module.css'
import Testimonial from './Testimonial'
import frey from '../../../../server/public/images/frey.png'
import oscar from '../../../../server/public/images/oscar.png'
import bryden from '../../../../server/public/images/bryden.png'
import birds from '../../../../server/public/images/birds.png'
import { useInView } from 'react-intersection-observer'

const testi = [
  {
    id: 1,
    name: 'Frey McCahon',
    image: frey,
    message: 'This app changed my life for the better',
  },
  {
    id: 2,
    name: 'Oscar Harron',
    image: oscar,
    message: 'It feels like I am actually writing a letter!',
  },
  {
    id: 3,
    name: 'Bryden Gunn',
    image: bryden,
    message:
      "Wow, I can honestly say I've felt a lot less stressed after communicating with Correspondence.",
  },
]

export default function SectionFour() {
  const [activeCard, setActiveCard] = useState(0)
  const { ref, inView, entry } = useInView()

  useEffect(() => {
    const changeTesti = setTimeout(() => {
      updateActive(activeCard)
    }, 6000)
    return () => clearTimeout(changeTesti)
  }, [activeCard])

  function updateActive() {
    if (activeCard == 2) {
      setActiveCard(0)
    } else {
      setActiveCard((activeCard) => activeCard + 1)
    }
  }

  function handleRightClick() {
    if (activeCard == 2) {
      setActiveCard(0)
    } else {
      setActiveCard((activeCard) => activeCard + 1)
    }
  }

  function handleLeftClick() {
    if (activeCard == 0) {
      setActiveCard(2)
    } else {
      setActiveCard((activeCard) => activeCard - 1)
    }
  }
  return (
    <div className={styles.sectionFour}>
      <div className={styles.secFourBirdsWrapper}>
        <img src={birds} alt="Crazy Birds"></img>
      </div>
      <div
        ref={ref}
        className={`${styles.secFourTop} ${
          inView ? styles.show : styles.hidden
        }`}
      >
        <h2 className={styles.secFourHeader}>Testimonials</h2>
      </div>
      <div className={styles.secFourBot}>
        <div
          ref={ref}
          className={`${styles.testimonialWrapper} ${
            inView ? styles.show : styles.hidden
          }`}
        >
          <Testimonial
            test={testi[`${activeCard}`]}
            activeCard={activeCard}
            handleRightClick={handleRightClick}
            handleLeftClick={handleLeftClick}
          />
        </div>
      </div>
    </div>
  )
}
