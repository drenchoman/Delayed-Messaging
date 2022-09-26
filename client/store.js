import { configureStore } from '@reduxjs/toolkit'
import user from './slices/user'
import darkmode from './slices/darkmode'
import contacts from './slices/contacts'

const store = configureStore({
  reducer: {
    user,
    darkmode,
    contacts
  },
})

export default store
export const dispatch = store.dispatch