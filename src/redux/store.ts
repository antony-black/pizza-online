import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filter/slice';
import paginationReducer from './pagination/slice';
import cartReducer from './cart/slice';
import pizzaReducer from './slices/pizzaSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    pagination: paginationReducer,
    cart: cartReducer,
    pizza: pizzaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
