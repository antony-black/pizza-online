import { ICartPizza } from '../@types/cart';

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const cartItems = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(cartItems);
  return {
    cartItems,
    totalPrice,
  };
};

export const calcTotalPrice = (items: ICartPizza[]) => {
  const totalPrice = items.reduce((total, pizza) => pizza.price * pizza.count + total, 0);
  return parseFloat(totalPrice.toFixed(2));
};