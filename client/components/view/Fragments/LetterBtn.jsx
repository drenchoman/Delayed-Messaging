import React from 'react'
import styles from '../../../../server/public/styles/Buttons.module.css'

export default function LetterBtn() {
  return (
    <div className={styles.letterBtnWrap}>
      <button className={styles.letterBtn}>Delete</button>
      <button className={styles.LetterBtn}>Archive</button>
    </div>
  )
}
