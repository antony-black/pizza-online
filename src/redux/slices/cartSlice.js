import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allPizza: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPizza(state, action) {
      console.log('cart/addPizza: ', action);
      const existedPizza = state.allPizza.find((pizza) => pizza.id === action.payload.id);
      if (existedPizza) {
        existedPizza.count ++;
      } else {
        state.allPizza.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    removePizza(state, action) {
      console.log('cart/removePizza: ', state, action);
      state.allPizza.filter((pizza) => pizza.id !== action.payload);
    },
    clearCart(state) {
      console.log('cart/clearCart: ', state);
      state.allPizza = [];
    },
    setTotalPrice(state, action) {
      console.log('cart/setTotalPrice: ', action.payload);
      state.totalPrice += action.payload;
      console.log('cart/setTotalPrice-2: ', state.totalPrice);
    },
  },
});

export const { addPizza, removePizza, clearCart, setTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;
