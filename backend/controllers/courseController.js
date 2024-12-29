const prisma = require('../config/prisma-client');
const { ObjectId } = require('mongodb');  
const multer = require('multer');
const path = require('path');


const createCourse = async (req, res) => {
  const { title, description, price, whatyouwilllearn, hours } = req.body;
  const image = req.file ? `/public/${req.file.filename}` : '';

  try {
    const course = await prisma.course.create({
      data: {
        title,
        description,
        price: parseFloat(price),
        image,
        whatyouwilllearn,
        hours: parseInt(hours, 10),
      },
    });
    res.status(201).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating course', error });
  }
};


const getCourses = async (req, res) => {
  try {
    const courses = await prisma.course.findMany();
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching courses', error });
  }
};

const getCoursesById = async (req, res) => {
  const { id } = req.params;  

  try {
    const course = await prisma.course.findUnique({
      where: {
        id: new ObjectId(id),  
      },
    });

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json(course);  
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching course', error });
  }
};

const updateCourse = async (req, res) => {
  const { id } = req.params;
  const { title, description, price, whatyouwilllearn, hours,image } = req.body;

  try {
    console.log(req.body);
    const course = await prisma.course.update({
      where: { id: new ObjectId(id) }, 
      data: { title, description, 
         image ,whatyouwilllearn, 
         price:parseFloat(price),
        hours:parseFloat(hours) },
    });
    res.json(course);
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Course not found' });
    }
    console.error(error);
    res.status(500).json({ message: 'Error updating course', error });
  }
};

const deleteCourse = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.course.delete({ where: { id: new ObjectId(id) } });  
    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Course not found' });
    }
    console.error(error);
    res.status(500).json({ message: 'Error deleting course', error });
  }
};

module.exports = {
  createCourse,
  getCourses,
  getCoursesById,
  updateCourse,
  deleteCourse,
};
