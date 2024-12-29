import React from 'react';
import Skeleton from 'react-loading-skeleton';

const CourseLoader = ({ count }) => {
  return Array(count).fill(0).map((_, index) => (
    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
      <Skeleton height={200} />
      <div className="p-4">
        <Skeleton height={24} width="80%" />
        <Skeleton height={20} width="40%" className="mt-2" />
      </div>
    </div>
  ));
};

export default CourseLoader;