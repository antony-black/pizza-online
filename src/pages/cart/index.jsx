import React, { useState } from 'react';
import styles from './index.module.scss';

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className={styles.cart}>
      {cartItems.length > 0 ? (
        cartItems.map((item) => <div>{item}</div>)
      ) : (
        <img src="img/empty-cart.png" alt="empty cart" />
      )}
    </div>
  );
};
