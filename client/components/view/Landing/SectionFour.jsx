import React from 'react'
import styles from '../../../../server/public/styles/Landing.module.css'
import Testimonial from './Testimonial'
import face from '../../../../server/public/images/svg/face.svg'
import birds from '../../../../server/public/images/birds.png'

const testi = [
  {
    id: 1,
    name: 'Frey McCahon',
    image: face,
    message: 'This app changed my life for the better',
  },
  {
    id: 2,
    name: 'Oscar Harron',
    image: face,
    message: 'Pog! It feels like I am actually writing a letter!',
  },
  {
    id: 3,
    name: 'Bryden Gunn',
    image: face,
    message:
      "Wow, I can honestly say I've felt a lot less stressed after communicating with Correspondence.",
  },
]

export default function SectionFour() {
  return (
    <div className={styles.sectionFour}>
      <div className={styles.secFourBirdsWrapper}>
        <img src={birds} alt="Crazy Birds"></img>
      </div>
      <div className={styles.secFourTop}>
        <h2 className={styles.secFourHeader}>Testimonials</h2>
      </div>
      <div className={styles.secFourBot}>
        <div className={styles.testimonialWrapper}>
          {testi.map((test) => (
            <Testimonial key={test.id} test={test} />
          ))}
        </div>
      </div>
    </div>
  )
}
