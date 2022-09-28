import React from 'react'
import NavTwo from './NavTwo'
import styles from '../../../server/public/styles/Dashboard.module.css'

function DashBoard() {
  const { body, backgroundImage } = styles

  return (
    <>
      <div className={styles.fade}>
        <NavTwo />
        <div className={body}>
          <img className={backgroundImage} src="/server/public/images/svg/main-background-birds.svg" alt="" />
        </div>
      </div>
    </>
  )
}

export default DashBoard
