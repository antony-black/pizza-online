import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartPizza, ICartState } from '../cart/types';
import CartService from '../../services/CartService';

const { cartItems, totalPrice } = CartService.getCartFromLS();

const initialState: ICartState = {
  allCartPizza: cartItems,
  totalPrice: totalPrice,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPizza(state, action: PayloadAction<ICartPizza>) {
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
        });
      }
      // cartSlice.caseReducers.setTotalPrice(state)
    },

    reducePizza(state, action: PayloadAction<ICartPizza>) {
      const pizzaIndex = state.allCartPizza.findIndex(
        (pizza) =>
          pizza.id === action.payload.id &&
          pizza.size === action.payload.size &&
          pizza.type === action.payload.type,
      );

      const pizza = state.allCartPizza[pizzaIndex];
      if (pizzaIndex !== -1 && pizza.count > 1) {
        pizza.count--;
      }
    },

    removePizza(state, action: PayloadAction<ICartPizza>) {
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
      state.totalPrice = CartService.calcTotalPrice(state.allCartPizza);
    },
  },
});

export const { addPizza, reducePizza, removePizza, clearCart, setTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;
