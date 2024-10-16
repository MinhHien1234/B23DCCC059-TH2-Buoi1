// src/slices/imageSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk để fetch hình ảnh từ API
export const fetchImages = createAsyncThunk(
  'images/fetchImages',
  async (query, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=46166847-40e887f0f1cbd269c98d3b401&q=${query.trim()}&image_type=photo`
      );
      return response.data.hits;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const imageSlice = createSlice({
  name: 'images',
  initialState: {
    images: [],
    query: '',
    loading: false,
    error: null,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setQuery } = imageSlice.actions;

export default imageSlice.reducer;
