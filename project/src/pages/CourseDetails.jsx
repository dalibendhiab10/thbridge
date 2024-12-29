import React, { useEffect, useState } from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import { Clock } from 'lucide-react';
import Button from '@/components/ui/Button';
import ContactForm from '@/components/contact/ContactForm';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';  // Import Skeleton

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();  // Initialize useNavigate

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`/courses/${id}`);
        window.scrollTo(0, 0);

        setCourse(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching course details:', error);
        setLoading(false);
        navigate('/404');
      }
    };

    fetchCourseDetails();
  }, [id, navigate]); 

  if (loading) {
    return (
      <div className="pt-16">
        <div className="relative h-[60vh] flex items-center">
          <Skeleton height="100%" width="100%" />
        </div>
        <div className="container mx-auto px-4 py-12">
          <Skeleton height={40} width="60%" className="mb-4" />
          <Skeleton height={20} width="80%" className="mb-6" />
          <Skeleton height={20} width="90%" className="mb-6" />
          <Skeleton height={50} width={100} />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="pt-16">
        <div className="relative h-[60vh] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${course.image})` }}
          >
            <div className="absolute inset-0 bg-primary bg-opacity-75"></div>
          </div>
          <div className="relative container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {course.title}
            </h1>
            <div className="flex items-center text-white">
              <Clock className="h-5 w-5 mr-2" />
              <span>{course.hours} Hours</span>
            </div>
          </div>
        </div>

        {/* Course Details */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Course Overview</h2>
              <p className="text-gray-700 mb-6">{course.description}</p>

              <h2 className="text-2xl font-bold text-primary mb-4">What You'll Learn</h2>
              <ul className="text-gray-700 mb-8">
                {course.whatyouwilllearn && course.whatyouwilllearn.map((item, index) => (
                  <li key={index} className="mb-2 list-disc list-inside">{item}</li>
                ))}
              </ul>

              {/* Course Price and Enroll Button */}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">
                  ${course.price}
                </span>
                <Button className="bg-secondary text-primary hover:bg-opacity-90">
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
    </>
  );
};

export default CourseDetails;
