import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './FavouriteBook/FavReducer';

export const store = configureStore({
    reducer: {
        book: bookSlice,
    }
  })