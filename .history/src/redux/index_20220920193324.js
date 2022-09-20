import { configureStore } from '@reduxjs/toolkit';
import FavReducer from './FavouriteBook/FavReducer';

export const store = configureStore({
    reducer: {
        book: FavReducer,
    }
  })