import { createSlice } from '@reduxjs/toolkit'

const getTheme = () => {
  const theme = `${window?.localStorage?.getItem('theme)')}`
  if (['light', 'dark'].includes(theme)) return theme
  const userMedia = window.matchMedia('(prefers-color-scheme: light)')
  if (userMedia.matches) return 'light'
  return 'dark'
}

const initialState = getTheme()

const slice = createSlice({
  name: 'darkmode',
  initialState,
  reducers: {
    updateDarkMode: (state, action) => action.payload,
  },
})

export const { updateDarkMode } = slice.actions
export default slice.reducer
