import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import CourseCard from '@/components/courses/CourseCard';
import CourseLoader from '@/components/courses/CourseLoader';
import axios from 'axios';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`/courses`);
        setCourses(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch courses. Please try again later.');
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
        {error && (
          <div className="text-center text-red-500 mb-6">{error}</div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? <CourseLoader count={6} />
            : courses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default CourseList;
