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
      const existedPizza = state.allPizza.find((pizza) => pizza.id === action.payload.id);
      if (existedPizza) {
        existedPizza.count++;
      } else {
        state.allPizza.push({
          ...action.payload,
          count: 1,
        });
      }
    },

    reducePizza(state, action) {
      const pizzaIndex = state.allPizza.findIndex((pizza) => pizza.id === action.payload);
      if (pizzaIndex !== -1) {
        if (state.allPizza[pizzaIndex].count > 1) {
          state.allPizza[pizzaIndex].count--;
        } else {
          state.allPizza.splice(pizzaIndex, 1);
        }
      }
    },

    removePizza(state, action) {
      state.allPizza = state.allPizza.filter((pizza) => pizza.id !== action.payload);
    },

    clearCart(state) {
      state.allPizza = [];
    },

    setTotalPrice(state) {
      const price = state.allPizza.reduce(
        (total, pizza) => pizza.price * pizza.count + total,
        0,
      );
      state.totalPrice = parseFloat(price.toFixed(2))
    },
  },
});

export const { addPizza, reducePizza, removePizza, clearCart, setTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;
