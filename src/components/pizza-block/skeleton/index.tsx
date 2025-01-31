import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton: React.FC = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="48" y="33" rx="3" ry="3" width="52" height="0" />
    <circle cx="131" cy="85" r="79" />
    <rect x="0" y="181" rx="10" ry="10" width="280" height="24" />
    <rect x="0" y="223" rx="10" ry="10" width="280" height="85" />
    <rect x="0" y="331" rx="10" ry="10" width="89" height="27" />
    <rect x="125" y="331" rx="10" ry="10" width="155" height="40" />
  </ContentLoader>
);
