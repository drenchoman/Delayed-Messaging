import { configureStore } from '@reduxjs/toolkit'
import user from './slices/user'
import darkmode from './slices/darkmode'
import contacts from './slices/contacts'
import send from './slices/send'

const store = configureStore({
  reducer: {
    user,
    darkmode,
    contacts,
    send,
  },
})

export default store
