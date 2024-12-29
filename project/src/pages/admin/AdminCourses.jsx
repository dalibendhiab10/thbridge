import React, { useState, useEffect } from 'react';
import { Pencil, Trash2, Plus, Search } from 'lucide-react';
import axios from 'axios';
import { DataTable } from '@/components/admindash/DataTable';
import EditCourseModal from '@/components/admindash/EditCourseModal';
import { toast } from 'react-toastify';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchCourses = async () => {
    try {
      setCourses([]);
      const response = await axios.get('/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      axios.delete(`/courses/${id}`)
        .then(() => {
          setCourses(courses.filter((course) => course.id !== id));
        })
        .catch((error) => {
          console.error('Error deleting course:', error);
        });
    }
  };

  const handleSubmit = async (id, courseData) => {
    try {
      const response = await axios.put(`/courses/${id}`, courseData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (response.status !== 200) {
        toast.error('Error updating course');
        return;
      }
      toast.success('Course updated successfully');
      fetchCourses();
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error updating course data:', error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const columns = [
    {
      accessorKey: 'title',
      header: 'Title',
      cell: ({ row }) => (
        <div>
          <div className="font-medium">{row.original.title}</div>
          <div className="text-sm text-gray-500">{row.original.description}</div>
        </div>
      ),
    },
    {
      accessorKey: 'price',
      header: 'Price',
      cell: ({ row }) => <div>{row.original.price} Tnd</div>,
    },
    {
      accessorKey: 'hours',
      header: 'Hours',
    },
    {
      accessorKey: 'createdAt',
      header: 'Created At',
      cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString(),
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <button
            onClick={() => {
              setEditingCourse(row.original);
              setIsModalOpen(true);
            }}
            className="text-blue-600 hover:text-blue-900"
          >
            <Pencil className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleDelete(row.original.id)}
            className="text-red-600 hover:text-red-900"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Courses</h2>
        <button className="px-4 py-2 bg-primary text-white rounded-md flex flex-row item-center align-center" onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4" /> Add Course
        </button>
      </div>
      <div className="mt-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
          placeholder="Search for courses..."
        />
      </div>
      <DataTable
        columns={columns}
        data={courses.filter((course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase())
        )}
      />
      <EditCourseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        course={editingCourse}
      />
    </div>
  );
};

export default Courses;
