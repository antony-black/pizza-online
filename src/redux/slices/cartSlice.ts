import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ICartPizza, ICartState } from '../../@types/cart';
import { calcTotalPrice, getCartFromLS } from '../../utils';

const { cartItems, totalPrice } = getCartFromLS();

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
      // else {
      //   state.allCartPizza.splice(pizzaIndex, 1);
      // }
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
      // const price = state.allCartPizza.reduce(
      //   (total, pizza) => pizza.price * pizza.count + total,
      //   0,
      // );
      // state.totalPrice = parseFloat(price.toFixed(2));
      state.totalPrice = calcTotalPrice(state.allCartPizza);
    },
  },
});

export const selectCart = (state: RootState) => state.cart;

export const { addPizza, reducePizza, removePizza, clearCart, setTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;
