import React, { useEffect } from 'react'
import styles from '../../../../server/public/styles/Landing.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { updateDarkMode } from '../../../slices/darkmode'
import sun from '../../../../server/public/images/svg/sun.svg'
import moon from '../../../../server/public/images/svg/moon.svg'

export default function Theme() {
  const theme = useSelector((state) => state.darkmode)
  const dispatch = useDispatch()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleChange = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    dispatch(updateDarkMode(next))
  }

  return (
    <div className={styles.themeToggle}>
      <img
        src={theme == 'dark' ? moon : sun}
        alt="Toggle Dark Mode"
        className={`${theme}`}
        onClick={handleChange}
      ></img>
    </div>
  )
}
