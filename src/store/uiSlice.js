import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    mobileNavOpen: false,
    scrollY: window.scrollY,
    deltaScrollY: 0,
  },
  reducers: {
    toggleMobileNavOpen: (state) => {
      state.mobileNavOpen = !state.mobileNavOpen;
    },
    setMobileNavOpenState: (state, action) => {
      state.mobileNavOpen = action.payload;
    },
    handleScroll: (state) => {
      state.deltaScrollY = window.scrollY - state.scrollY;
      state.scrollY = window.scrollY;
    },
  },
});

export const { toggleMobileNavOpen, handleScroll, setMobileNavOpenState } = uiSlice.actions;
export default uiSlice.reducer;
