import React from "react";

interface ICategoryProps {
  className?: string
  title: string
  onClick: () => void
}

export const Category: React.FC<ICategoryProps> = ({ className = '', title, onClick }) => {
  return (
    <li className={className} onClick={onClick}>
      {title}
    </li>
  );
};
