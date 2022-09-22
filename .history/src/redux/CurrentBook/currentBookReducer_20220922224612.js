import { createSlice } from '@reduxjs/toolkit'

const gamesSlice = createSlice({
  name: 'current',
  initialState: {
    currentBook: null
  },
  reducers: {
    setCurrentBook: (state, action) => {
      state.currentBook = action.payload
    },
  }
});

export const { setCurrentBook } = gamesSlice.actions;
export default gamesSlice.reducer;