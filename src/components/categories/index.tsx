import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, setCategoryId } from '../../redux/slices/filterSlice';
import { Category } from '../category';
import { pizzaCategories } from '../../pizza-data/pizzaCategories';

export const Categories: React.FC = () => {
  const { categoryId } = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {pizzaCategories.map((type, index) => (
          <Category
            key={type}
            className={categoryId === index ? 'active' : ''}
            title={type}
            onClick={() => dispatch(setCategoryId(index))}
          />
        ))}
      </ul>
    </div>
  );
};
