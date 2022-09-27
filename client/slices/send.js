import { createSlice } from '@reduxjs/toolkit'

const sendTo = ''

const slice = createSlice({
  name: 'send',
  initialState: sendTo,
  reducers: {
    updateSend: (state, { payload }) => payload,
    clearSend: (state, { payload }) => '',
  },
})

export const { updateSend, clearSend } = slice.actions
export default slice.reducer
