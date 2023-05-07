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
    handleScroll: (state) => {
      state.deltaScrollY = window.scrollY - state.scrollY;
      state.scrollY = window.scrollY;
    },
  },
});

export const { toggleMobileNavOpen, handleScroll } = uiSlice.actions;
export default uiSlice.reducer;
