import React from 'react';
import './Loading.css';

const Loading = ({ width = '100%', height = '150px' }) => {
  return (
    <div className="skeleton-box" style={{ width, height }}></div>
  );
};

export default Loading;
