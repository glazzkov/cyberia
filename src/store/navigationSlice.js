import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  // здесь хранятся "названия" маршрутов, которые будут отображаться в хлебных крошках.
  // более правильным решением было бы сделать это через i18next (как и все интерфейсные тексты), но для простоты необходимые названия будут храниться в стейте
  initialState: {
    projects: { id: 'projects', path: 'projects', name: 'Проекты' },
  },
  // также при необходимости можно задать редьюсеры, если продолжить использовать этот способ
  reducers: {},
});

export default navigationSlice.reducer;
