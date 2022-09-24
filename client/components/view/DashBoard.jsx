import React from 'react'
import NavTwo from './NavTwo'
import styles from '../../../server/public/styles/Dashboard.module.css'

function DashBoard() {
  const { body } = styles

  return (
    <>
      <NavTwo />
      <div className={body}>

      </div>
    </>
  )
}

export default DashBoard
