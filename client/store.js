import { configureStore } from '@reduxjs/toolkit'
import user from './slices/user'
import darkmode from './slices/darkmode'
import contacts from './slices/contacts'
import send from './slices/send'
import messages from './slices/messages'

const store = configureStore({
  reducer: {
    user,
    darkmode,
    contacts,
    send,
    messages,
  },
})

export default store
