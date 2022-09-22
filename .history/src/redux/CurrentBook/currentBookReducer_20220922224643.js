import { createSlice } from '@reduxjs/toolkit'

const BookSlice = createSlice({
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

export const { setCurrentBook } = BookSlice.actions;
export default BookSlice.reducer;