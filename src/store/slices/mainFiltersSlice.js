import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 6, title: 'Самый дешевый', name: 'lowPrice', checked: false, type: 'mainFilter' },
  { id: 7, title: 'Самый быстрый', name: 'fast', checked: false, type: 'mainFilter' },
  { id: 8, title: 'Оптимальный', name: 'optimal', checked: false, type: 'mainFilter' },
];

const mainFiltersSlice = createSlice({
  name: 'mainFilters',
  initialState,
  reducers: {
    toggleMainFilter: (state, action) => {
      const name = action.payload;
      return state.map((filter) => ({
        ...filter,
        checked: filter.name === name,
      }));
    },
  },
});

export const { toggleMainFilter } = mainFiltersSlice.actions;
export default mainFiltersSlice.reducer;
