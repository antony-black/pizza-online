import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { IPizza, IPizzaState } from '../../@types/pizza';
import { Status } from '../../enums/status';

type TFetchPizza = Record<string, string>;
// <IPizza[], { url: string }>

export const fetchPizza = createAsyncThunk<IPizza[], TFetchPizza>(
  'pizza/fetchPizzaStatus',
  async ({ url }) => {
    const { data } = await axios.get<IPizza[]>(url);

    // return data as IPizza[];
    return data;
  },
);

const initialState: IPizzaState = {
  allPizza: [],
  status: Status.LOADING,
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizza.pending, (state) => {
        state.status = Status.LOADING;
        state.allPizza = [];
      })
      .addCase(fetchPizza.fulfilled, (state, action: PayloadAction<IPizza[]>) => {
        state.status = Status.SUCCESS;
        state.allPizza = action.payload;
      })
      .addCase(fetchPizza.rejected, (state) => {
        state.status = Status.ERROR;
        state.allPizza = [];
      });
  },
});

export const selectPizzaData = (state: RootState) => state.pizza;

export default pizzaSlice.reducer;
