import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allCartPizza: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPizza(state, action) {
      const existedPizza = state.allCartPizza.find(
        (pizza) =>
          pizza.id === action.payload.id &&
          pizza.size === action.payload.size &&
          pizza.type === action.payload.type,
      );
      if (existedPizza) {
        existedPizza.count++;
      } else {
        state.allCartPizza.push({
          ...action.payload,
          count: 1,
        });
      }
      // cartSlice.caseReducers.countTotals(state) 
    },

    reducePizza(state, action) {
      const pizzaIndex = state.allCartPizza.findIndex(
        (pizza) =>
          pizza.id === action.payload.id &&
          pizza.size === action.payload.size &&
          pizza.type === action.payload.type,
      );
      if (pizzaIndex !== -1 && state.allCartPizza[pizzaIndex].count > 1) {
        state.allCartPizza[pizzaIndex].count--;
      } else {
        state.allCartPizza.splice(pizzaIndex, 1);
      }
    },

    removePizza(state, action) {
      state.allCartPizza = state.allCartPizza.filter(
        (pizza) =>
          !(
            pizza.id === action.payload.id &&
            pizza.size === action.payload.size &&
            pizza.type === action.payload.type
          ),
      );
    },

    clearCart(state) {
      state.allCartPizza = [];
      state.totalPrice = 0;
    },

    setTotalPrice(state) {
      const price = state.allCartPizza.reduce((total, pizza) => pizza.price * pizza.count + total, 0);
      state.totalPrice = parseFloat(price.toFixed(2));
    },
  },
});

export const selectCart = (state) => state.cart;

export const { addPizza, reducePizza, removePizza, clearCart, setTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;
