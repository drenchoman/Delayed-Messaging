import React from 'react'
import styles from '../../../../server/public/styles/Landing.module.css'
import wind from '../../../../server/public/images/svg/wind.svg'

import { useInView } from 'react-intersection-observer'
export default function Wind() {
  const { ref, inView, entry } = useInView()

  return (
    <div
      ref={ref}
      className={`${styles.windWrapper} ${inView ? styles.zoom : styles.out}`}
    >
      <img src={wind} alt="windy"></img>
    </div>
  )
}
