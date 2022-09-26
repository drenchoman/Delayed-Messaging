import { configureStore } from '@reduxjs/toolkit'
import user from './slices/user'
import darkmode from './slices/darkmode'

const store = configureStore({
  reducer: {
    user,
    darkmode,
  },
})

export default store
