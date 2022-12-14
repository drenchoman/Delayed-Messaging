import { createSlice } from '@reduxjs/toolkit'

const newContact = []

const slice = createSlice({
  name: 'contacts',
  initialState: newContact,
  reducers: {
    updateContactList: (state, { payload }) => [...payload],
  },
})

export const { updateContactList } = slice.actions
export default slice.reducer
