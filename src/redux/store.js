import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import paginationReducer from './slices/paginationSlice';
import cartSlice from './slices/cartSlice';


export const store = configureStore({
  reducer: {
    filter: filterReducer,
    pagination: paginationReducer,
    cart: cartSlice,
  },
});