const express = require('express');
const passport = require('passport');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors'); 

const courseRoutes = require('./routes/course.routes');
const authRoutes = require('./routes/auth.routes');
const contactRoutes = require('./routes/contact.routes');

const app = express();
const prisma = new PrismaClient(); 

app.use(express.json());

app.use(cors());

require('./config/passport')(passport); 
app.use(passport.initialize()); // init passport auth

app.use('/courses', courseRoutes); // Course routes
app.use('/auth', authRoutes); // Authentication routes
app.use('/contact', contactRoutes); //  contact routes

const PORT = process.env.APP_PORT || 3000;

(async () => {
  try {
    await prisma.$connect(); // 
    console.log('Database connected');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  } catch (error) {
    console.error('Database connection error:', error);
  }
})();
