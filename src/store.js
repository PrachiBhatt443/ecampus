// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import schoolReducer from './features/schoolSlice';
import galleryReducer from './features/gallerySlice';
export const store = configureStore({
  reducer: {
    school: schoolReducer,
    gallery: galleryReducer,
  },
});
