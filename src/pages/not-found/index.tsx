import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h1>
        <span>😕</span>
        <br />
        There is nothing found!
      </h1>
      <p className={styles.description}>
        Unfortunately this pizza doesn't exist. Please choose another one
      </p>

      <Link to="/" className="button button--outline button--add go-back-btn">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 13L1 6.93015L6.86175 1"
                stroke="#D3D3D3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Back</span>
          </Link>
    </div>
  );
};

export default NotFound;