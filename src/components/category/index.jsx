import React from 'react';

export const Category = ({ className = '', title, onClick }) => {
  return (
    <li className={className} onClick={onClick}>
      {title}
    </li>
  );
};
