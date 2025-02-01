import React from 'react';
// import { useWhyDidYouUpdate } from 'ahooks';

interface ICategoryProps {
  className?: string;
  title: string;
  onClick: () => void;
}

export const Category: React.FC<ICategoryProps> = ({ className = '', title, onClick }) => {
  // useWhyDidYouUpdate('Category', { className, title, onClick });
  return (
    <li className={className} onClick={onClick}>
      {title}
    </li>
  );
};
