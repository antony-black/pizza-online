import { ICartPizza } from "../redux/cart/types";

export default class CartService {
  static getCartFromLS = () => {
    const data = localStorage.getItem('cart');
    const cartItems = data ? JSON.parse(data) : [];
    const totalPrice = this.calcTotalPrice(cartItems);
    return {
      cartItems,
      totalPrice,
    };
  };
  
  static calcTotalPrice = (items: ICartPizza[]) => {
    const totalPrice = items.reduce((total, pizza) => pizza.price * pizza.count + total, 0);
    return parseFloat(totalPrice.toFixed(2));
  };
}