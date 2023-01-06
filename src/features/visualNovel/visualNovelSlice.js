import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  checkpoint: 'conversation-0'
}

const visualNovelSlice = createSlice({
  name: 'visualNovel',
  initialState,
  reducers: {
    setCheckpoint: (state, action) => {
      state.checkpoint = action.payload
    }
  }
})

export default visualNovelSlice.reducer
export const { setCheckpoint } = visualNovelSlice.actions