import React from 'react';

const Heart = ({ className, active, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-10 w-10 ${active ? 'text-red-800' : ''} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
};

export default Heart;
