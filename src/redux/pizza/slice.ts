import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchPizza } from './asyncActions';

import { IPizza, IPizzaState } from '../pizza/types';
import { Status } from '../../enums/status';

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

export default pizzaSlice.reducer;