import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import navigationReducer from './navigationSlice';
import projetsReducer from './projectsSlice';
import contactFormReducer from './contactFormSlice';

export default configureStore({
  reducer: {
    ui: uiReducer,
    navigation: navigationReducer,
    projects: projetsReducer,
    contactForm: contactFormReducer,
  },
});
