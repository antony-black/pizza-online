import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/filter/selectors';
import { setCategoryId } from '../../redux/filter/slice';
import { Category } from '../category';
import { pizzaCategories } from '../../pizza-data/pizzaCategories';
// import { useWhyDidYouUpdate } from 'ahooks';

export const Categories: React.FC = React.memo(() => {
  // useWhyDidYouUpdate('Categories', {});

  const { categoryId } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeCategory = useCallback((index: number) => {
    dispatch(setCategoryId(index));
  }, []);

  return (
    <div className="categories">
      <ul>
        {pizzaCategories.map((type, index) => (
          <Category
            key={type}
            className={categoryId === index ? 'active' : ''}
            title={type}
            onClick={() => handleChangeCategory(index)}
          />
        ))}
      </ul>
    </div>
  );
});
