import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizza = createAsyncThunk('pizza/fetchPizzaStatus', async ({ url }) => {
  const { data } = await axios.get(url);

  return data;
});

const initialState = {
  allPizza: [],
  status: 'loading',
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizza.pending, (state) => {
        state.status = 'loading';
        state.allPizza = [];
      })
      .addCase(fetchPizza.fulfilled, (state, action) => {
        state.status = 'success';
        state.allPizza = action.payload;
      })
      .addCase(fetchPizza.rejected, (state) => {
        state.status = 'error';
        state.allPizza = [];
      });
  },
});

export const selectPizzaData = (state) => state.pizza;

export default pizzaSlice.reducer;
