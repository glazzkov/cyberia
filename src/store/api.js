import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProjects = createAsyncThunk('projects/projects', async () => {
  const response = await axios.get('https://backend.cyberia.studio/api/v1/projects');
  return response.data;
});

export const fetchProjectCategories = createAsyncThunk('projects/categories', async () => {
  const response = await axios.get('https://backend.cyberia.studio/api/v1/project-categories');
  return response.data;
});

export const postContactForm = createAsyncThunk('contactForm/data', async (formData) => {
  const response = await axios.post('https://backend.cyberia.studio/api/v1/feedbacks', formData);
  return response.data;
});
