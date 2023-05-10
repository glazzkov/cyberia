import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { fetchProjects, fetchProjectCategories } from './api';

const projectsAdapter = createEntityAdapter();
const categoriesAdapter = createEntityAdapter();

const projectsSlice = createSlice({
  name: 'projects',
  initialState: projectsAdapter.getInitialState({
    loadingStatus: 'idle',
    errors: null,
    categories: categoriesAdapter.getInitialState({
      selectedCategoryId: null,
    }),
  }),
  reducers: {
    setFilterCategoryId: (state, action) => {
      state.categories.selectedCategoryId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.fulfilled, (state, action) => {
        projectsAdapter.setAll(state, action.payload.items);
        state.loadingStatus = 'fulfilled';
      })
      .addCase(fetchProjectCategories.fulfilled, (state, action) => {
        categoriesAdapter.setAll(state.categories, action.payload.items);
      });
  },
});

export default projectsSlice.reducer;
export const { setFilterCategoryId } = projectsSlice.actions;
export const projectsSelectors = projectsAdapter.getSelectors((state) => state.projects);
export const projectCategoriesSelectors = projectsAdapter.getSelectors((state) => state.projects.categories);
