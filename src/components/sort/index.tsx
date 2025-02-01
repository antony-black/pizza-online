import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setType } from '../../redux/slices/filterSlice';
import { useWhyDidYouUpdate } from 'ahooks';

type TSort = {
  sortType: string;
};

export const Sort: React.FC<TSort> = React.memo(({ sortType }) => {
  useWhyDidYouUpdate('Sort', { sortType });
  const dispatch = useDispatch();
  const sortRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const sortCategories = ['rating', 'price', 'title'];

  const handleOpenPopUp = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(setType(sortCategories[0]));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        console.log(sortRef.current, event.composedPath());
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="sort" onClick={handleOpenPopUp}>
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
        <span>{sortType}</span>
      </div>
      {isOpen && (
        <div className="sort__popup">
          <ul>
            {sortCategories.map((category) => (
              <li
                key={category}
                className={sortType === category ? 'active' : ''}
                onClick={() => dispatch(setType(category))}>
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});
