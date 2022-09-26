import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateDarkMode } from '../../../slices/darkmode'

export default function Theme() {
  const theme = useSelector((state) => state.darkmode)
  const dispatch = useDispatch()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleChange = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    console.log(next)
    dispatch(updateDarkMode(next))
  }

  return (
    <div>
      <button className={`${theme}`} onClick={handleChange}>
        Change
      </button>
    </div>
  )
}
