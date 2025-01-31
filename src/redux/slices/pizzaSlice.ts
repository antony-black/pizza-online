import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { IPizza, IPizzaState } from '../../@types/pizza';

export const fetchPizza = createAsyncThunk<IPizza[], { url: string }>(
  'pizza/fetchPizzaStatus',
  async ({ url }: { url: string }) => {
    const { data } = await axios.get(url);

    return data as IPizza[];
  },
);

const initialState: IPizzaState = {
  allPizza: [],
  status: 'loading',
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizza.pending, (state) => {
        state.status = 'loading';
        state.allPizza = [];
      })
      .addCase(fetchPizza.fulfilled, (state, action: PayloadAction<IPizza[]>) => {
        state.status = 'success';
        state.allPizza = action.payload;
      })
      .addCase(fetchPizza.rejected, (state) => {
        state.status = 'error';
        state.allPizza = [];
      });
  },
});

export const selectPizzaData = (state: RootState) => state.pizza;

export default pizzaSlice.reducer;
