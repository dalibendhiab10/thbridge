import React from 'react';
import { Link } from 'react-router-dom';  

const CourseCard = ({ id, title, price, image }) => {
  return (
    <Link to={`/courses/${id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-primary font-bold"> {price + " "} DT/ Month</p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
