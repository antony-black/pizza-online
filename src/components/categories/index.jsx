import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../../redux/slices/filterSlice';
import { Category } from '../category';
import { pizzaCategories } from '../../pizza-data/pizzaCategories';

export const Categories = () => {
  const category = useSelector((state) => state.filter?.categoryId || 0);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {pizzaCategories.map((type, index) => (
          <Category
            key={type}
            className={category === index ? 'active' : ''}
            title={type}
            onClick={() => dispatch(setCategoryId(index))}
          />
        ))}
      </ul>
    </div>
  );
};
