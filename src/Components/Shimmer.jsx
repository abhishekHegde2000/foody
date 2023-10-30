import React from 'react';

const Shimmer = () => {
  const shimmerContainers = Array.from({ length: 20 }, (_, index) => (
    <div key={index} className="w-[200px] bg-gray-300 h-[300px] animate-pulse rounded-md p-4 m-2">
      <div className="bg-gray-400 h-5 w-2 rounded-md mb-2"></div>
      <div className="bg-gray-400 h-5 w-2 rounded-md"></div>
    </div>
  ));

  return (
    <div className="flex flex-wrap">
      {shimmerContainers}
    </div>
  );
};

export default Shimmer;

