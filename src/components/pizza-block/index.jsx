import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalPrice, addPizza } from '../../redux/slices/cartSlice';

export const PizzaBlock = ({ id, title, types, sizes, price, category, rating }) => {
  const cartPizza = useSelector(
    (state) => state.cart.allPizza.find((pizza) => pizza.id === id),
  );
  const amount = cartPizza ? cartPizza.count : 0;
  const dispatch = useDispatch();
  const [currentSize, setCurrentSize] = useState(0);
  const [currentThickness, setCurrentThickness] = useState(0);
  const thicknessTypes = ['think', 'tradition'];
  const pizzaToCart = {
    id,
    title,
    price,
    types: thicknessTypes[currentThickness],
    sizes: currentSize,
  };

  const handleAdd = () => {
    dispatch(setTotalPrice(price));
    dispatch(addPizza(pizzaToCart));
  };

  const handleThickness = (value) => {
    setCurrentThickness(value);
  };

  const handleSize = (value) => {
    setCurrentSize(value);
  };

  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((typeIndex) => (
            <li
              key={thicknessTypes[typeIndex]}
              className={currentThickness === typeIndex ? 'active' : ''}
              onClick={() => handleThickness(typeIndex)}>
              {thicknessTypes[typeIndex]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, index) => (
            <li
              key={size}
              className={currentSize === index ? 'active' : ''}
              onClick={() => handleSize(index)}>
              {`${size} sm`}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{`from ${price}$`}</div>
        <button className="button button--outline button--add" onClick={() => handleAdd(price)}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add</span>
          {amount > 0 && <i>{amount}</i>}
        </button>
      </div>
    </div>
  );
};
