import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setType } from '../../redux/slices/filterSlice';

export const Sort = () => {
  const sort = useSelector((state) => state.filter?.sortType || '');
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const sortCategories = ['rating', 'price', 'title'];

  const handleOpenPopUp = () => {
    setIsOpen(!isOpen);
  };

  // const handleCategory = (value) => {
  //   onClickSortType(value);
  // };

  useEffect(() => {
    dispatch(setType(sortCategories[0]))
    // handleCategory(sortCategories[0]);
  }, []);

  return (
    <div className="sort" onClick={handleOpenPopUp}>
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Sort by:</b>
        <span>{sort}</span>
      </div>
      {isOpen && (
        <div className="sort__popup">
          <ul>
            {sortCategories.map((category) => (
              <li
                key={category}
                className={sort === category ? 'active' : ''}
                onClick={() => dispatch(setType(category))}>
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
