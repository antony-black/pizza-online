import React from 'react';
import { Category } from '../category';
import { pizzaCategories } from '../../pizza-data/pizzaCategories';

export const Categories = ({ categoryId, onClickCategory }) => {
  const handleActiveCategory = (index) => {
    onClickCategory(index);
  };

  return (
    <div className="categories">
      <ul>
        {pizzaCategories.map((type, index) => (
          <Category
            key={type}
            className={categoryId === index ? 'active' : ''}
            title={type}
            onClick={() => handleActiveCategory(index)}
          />
        ))}
      </ul>
    </div>
  );
};
