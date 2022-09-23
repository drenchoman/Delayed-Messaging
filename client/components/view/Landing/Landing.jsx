import React from 'react'
import styles from '../../../../server/public/styles/Landing.module.css'
import { Link } from 'react-router-dom'
import Nav from '../../Nav'
export default function Landing() {
  return (
    <div className={styles.wrapper}>
      <Nav />

      <h1 className={styles.header}>Landing Page</h1>
    </div>
  )
}
