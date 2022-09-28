import { createSlice } from '@reduxjs/toolkit'

const messages = []

const slice = createSlice({
  name: 'messages',
  initialState: messages,
  reducers: {
    updateMessageList: (state, { payload }) => [...payload],
  },
})

export const { updateMessageList } = slice.actions
export default slice.reducer
