import React from 'react';
import { Link } from 'react-router-dom';

export const CartEmpty = () => {
  return (
    <>
      <div className="container container--cart">
          <div className="cart cart--empty">
            <h2>Cart is empty <span>😕</span></h2>
            <p>
              It looks like you haven't pizza yet.<br />
              To order pizza, go to the main page.
            </p>
            <img src="/img/empty-cart.png" alt="Empty cart" />
            <Link to={'/'} className="button button--black">
              <span>Back</span>
            </Link>
          </div>
        </div>
    </>
  );
}