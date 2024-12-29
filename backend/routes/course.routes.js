const express = require('express');
const { createCourse, getCourses, updateCourse, deleteCourse, getCoursesById } = require('../controllers/courseController');
const passport = require('passport');
const multer = require('multer');
const path = require('path');

// Set up multer storage configuration (optional, you can place this in your controller too)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public'); // Directory where the file will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Filename to be used
  }
});

const upload = multer({ storage });

// Initialize router
const router = express.Router();

router.post('/', upload.single('image'), createCourse);

router.get('/', getCourses);

router.get('/:id', getCoursesById);

router.put('/:id',  upload.single('image'), updateCourse);

router.delete('/:id',  deleteCourse);

module.exports = router;
