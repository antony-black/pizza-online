import React, { useState } from 'react';
import { Category } from '../category';
import { pizzaTypes } from '../../pizza-data/pizzaTypes';

export const Categories = () => {
  const [current, setCurrent] = useState(0);

  const handleActiveCategory = (index) => {
    setCurrent(index);
  };
  return (
    <div className="categories">
      <ul>
        {pizzaTypes.map((type, index) => (
          <Category
            key={type}
            className={current === index ? 'active' : ''}
            title={type}
            onClick={() => handleActiveCategory(index)}
          />
        ))}
      </ul>
    </div>
  );
};
