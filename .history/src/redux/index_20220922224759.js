import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './FavouriteBook/FavReducer';
import BookSlice from './CurrentBook/currentBookReducer'

export const store = configureStore({
    reducer: {
        book: bookSlice,
        current: BookSlice
    }
  })