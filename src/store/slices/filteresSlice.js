import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: 'Все', name: 'all', checked: false, type: 'additionalFilter' },
  {
    id: 2,
    title: 'Без пересадок',
    name: 'withoutTransfer',
    checked: false,
    type: 'additionalFilter',
  },
  { id: 3, title: '1 пересадка', name: 'oneTransfer', checked: false, type: 'additionalFilter' },
  { id: 4, title: '2 пересадки', name: 'twoTransfer', checked: false, type: 'additionalFilter' },
  { id: 5, title: '3 пересадки', name: 'threeTransfer', checked: false, type: 'additionalFilter' },
];

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleFilter: (state, action) => {
      const name = action.payload;
      if (name === 'all') {
        const allChecked = state.every((f) => f.checked);
        return state.map((filter) => ({ ...filter, checked: !allChecked }));
      }

      return state.map((filter) => {
        if (filter.name === name) {
          return { ...filter, checked: !filter.checked };
        }
        if (filter.name === 'all') {
          return { ...filter, checked: false };
        }
        return filter;
      });
    },
  },
});

export const { toggleFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
