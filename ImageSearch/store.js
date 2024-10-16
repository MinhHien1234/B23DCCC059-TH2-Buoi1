// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './imageslice';

const store = configureStore({
  reducer: {
    images: imageReducer,
  },
});

export default store;
