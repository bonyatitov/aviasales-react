import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './slices/filteresSlice';
import mainFiltersReducer from './slices/mainFiltersSlice';
import dataReducer from './slices/ticketsSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    mainFilters: mainFiltersReducer,
    data: dataReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
