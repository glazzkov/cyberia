import { createSlice } from '@reduxjs/toolkit';
import { postContactForm } from './api';

const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState: {
    status: 'idle',
    errors: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postContactForm.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(postContactForm.fulfilled, (state, action) => {
        state.status = action.payload.errors ? 'error' : 'fulfilled';
        state.errors = action.payload.errors;
      })
      .addCase(postContactForm.rejected, (state, action) => {
        state.status = 'error';
        state.errors = action.error;
      });
  },
});

export default contactFormSlice.reducer;
