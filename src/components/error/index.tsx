import React from 'react';

export const Error: React.FC = () => {
  return (
        <div className="cart cart--empty">
          The error is happened <span>😕</span>
          <p>
            Unfortunately couldn't get pizza. <br />
            Try again now or in a few minutes.
          </p>
        </div>
  );
};

