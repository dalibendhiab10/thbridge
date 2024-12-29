import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import axios from 'axios';

const EditCourseModal = ({ isOpen, onClose, onSubmit, course }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: 0,
    whatyouwilllearn: [''],
    hours: 0,
    image: '',
  });

  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (course) {
      setFormData({
        title: course.title,
        description: course.description,
        price: parseFloat(course.price),
        whatyouwilllearn: course.whatyouwilllearn || [''],
        hours: parseFloat(course.hours),
        image: course.image || '',
      });
    }
  }, [course]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('title', formData.title);
    formDataToSubmit.append('description', formData.description);
    formDataToSubmit.append('price', parseFloat(formData.price));
    formDataToSubmit.append('hours', parseFloat(formData.hours));
    formDataToSubmit.append('image', imageFile);
    formData.whatyouwilllearn.forEach((item, index) => {
      formDataToSubmit.append(`whatyouwilllearn[${index}]`, item);
    });

    try {
      await onSubmit(course.id, formDataToSubmit); 
      setFormData({
        title: '',
        description: '',
        price: 0,
        whatyouwilllearn: [''],
        hours: 0,
        image: '',
      });
      onClose();
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  const handleWhatYouWillLearnChange = (index, value) => {
    const newWhatYouWillLearn = [...formData.whatyouwilllearn];
    newWhatYouWillLearn[index] = value;
    setFormData({ ...formData, whatyouwilllearn: newWhatYouWillLearn });
  };

  const handleAddLearnItem = () => {
    setFormData({
      ...formData,
      whatyouwilllearn: [...formData.whatyouwilllearn, ''],
    });
  };

  const handleRemoveLearnItem = (index) => {
    const newWhatYouWillLearn = formData.whatyouwilllearn.filter(
      (item, i) => i !== index
    );
    setFormData({ ...formData, whatyouwilllearn: newWhatYouWillLearn });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Edit Course</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="mt-1 block w-full rounded-md border-2 border-primary focus:border-primary focus:ring-primary h-10 pl-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="mt-1 block w-full rounded-md border-2 border-primary focus:border-primary focus:ring-primary"
                rows={3}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                className="mt-1 block w-full rounded-md border-2 border-primary focus:border-primary focus:ring-primary h-10 pl-2"
                min="0"
                step="0.01"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">What You'll Learn</label>
              {formData.whatyouwilllearn.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleWhatYouWillLearnChange(index, e.target.value)}
                    className="mt-1 block w-full rounded-md border-2 border-primary focus:border-primary focus:ring-primary h-10 pl-2"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveLearnItem(index)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddLearnItem}
                className="mt-2 text-blue-600 hover:text-blue-900"
              >
                Add Another Item
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Hours</label>
              <input
                type="number"
                value={formData.hours}
                onChange={(e) => setFormData({ ...formData, hours: Number(e.target.value) })}
                className="mt-1 block w-full rounded-md border-2 border-primary focus:border-primary focus:ring-primary h-10 pl-2"
                min="0"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Image</label>
              <div className="relative">
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  accept="image/*"
                />
                <div className="mt-1 block w-full rounded-md border-2 border-primary focus:border-primary focus:ring-primary h-10 pl-2 pr-14">
                  <span className="text-gray-600">
                    {imageFile ? imageFile.name : formData.image || 'No file chosen'}
                  </span>
                </div>
                <button
                  type="button"
                  className="absolute top-0 right-0 px-4 py-2 text-white bg-primary rounded-r-md"
                >
                  Choose File
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 h-10 pl-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourseModal;
