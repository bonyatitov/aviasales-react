import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    tickets: [],
    loading: false,
    error: false,
    stop: false,
  },
  reducers: {
    setTickets: (state, action) => {
      state.tickets = [...state.tickets, ...action.payload];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setStop: (state, action) => {
      state.stop = action.payload;
    },
  },
});

export const { setTickets, setLoading, setError, setStop } = dataSlice.actions;
export default dataSlice.reducer;
