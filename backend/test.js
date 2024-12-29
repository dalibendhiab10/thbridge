const axios = require('axios');

// Base URL for the API
const BASE_URL = 'http://localhost:3000'; // Replace with your actual server URL
const mockCourses = [
  {
    title: 'Web Development Fundamentals',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Learn the basics of web development and how to create your first website.',
    whatyouwilllearn: [
      'HTML and CSS fundamentals',
      'Responsive web design',
      'Introduction to JavaScript'
    ],
    hours: 20
  },
  {
    title: 'Advanced JavaScript',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Master JavaScript and its advanced concepts for building modern applications.',
    whatyouwilllearn: [
      'Asynchronous JavaScript (Promises, async/await)',
      'Advanced functions and closures',
      'JavaScript design patterns'
    ],
    hours: 25
  },
  {
    title: 'UI/UX Design Principles',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Learn the fundamentals of UI/UX design to create user-friendly interfaces.',
    whatyouwilllearn: [
      'User-centered design principles',
      'Wireframing and prototyping',
      'Conducting usability testing'
    ],
    hours: 30
  },
  {
    title: 'React Development',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Become proficient in React for building dynamic, responsive web applications.',
    whatyouwilllearn: [
      'React fundamentals and components',
      'State management with hooks',
      'Building reusable components'
    ],
    hours: 40
  },
  {
    title: 'Python Programming',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Learn Python programming from scratch and explore its practical uses.',
    whatyouwilllearn: [
      'Python syntax and data structures',
      'File handling and working with APIs',
      'Object-oriented programming in Python'
    ],
    hours: 18
  },
  {
    title: 'Data Science Essentials',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'A beginner’s guide to data science, including tools, techniques, and methodologies.',
    whatyouwilllearn: [
      'Data cleaning and preprocessing',
      'Introduction to machine learning',
      'Data visualization with Python libraries'
    ],
    hours: 35
  }
];


// Step 1: Create a Superadmin User
const createSuperAdmin = async () => {
  try {
    const superadmin = {
      username: 'bendhiab@computer.org',
      password: 'dali',
      role: 'superadmin', // You should have a role validation logic on the server side
    };

    const response = await axios.post(`${BASE_URL}/auth/register`, superadmin);
    console.log('Superadmin created:', response.data);
    return response.data; // User data returned after creation
  } catch (error) {
    console.error('Error creating superadmin:', error.response?.data || error.message);
    process.exit(1);
  }
};

// Step 2: Log in as Superadmin to get JWT token
const loginSuperAdmin = async () => {
  try {
    const loginData = {
      username: 'bendhiab@computer.org',
      password: 'dali',
    };

    const response = await axios.post(`${BASE_URL}/auth/login`, loginData);
    console.log('Superadmin logged in, JWT token:', response.data.token);
    return response.data.token; // JWT token to authenticate further requests
  } catch (error) {
    console.error('Error logging in as superadmin:', error.response?.data || error.message);
    process.exit(1);
  }
};

// Step 3: Add mock courses
const addMockCourses = async (token) => {
  try {
    for (const course of mockCourses) {
      const response = await axios.post(
        `${BASE_URL}/courses`,
        course,
        {
          headers: {
            Authorization: ` ${token}`, // Use the token for authentication
          },
        }
      );
      console.log('Course added successfully:', response.data);
    }
  } catch (error) {
    console.error('Error adding courses:', error.response?.data || error.message);
    process.exit(1);
  }
};

// Step 4: Get All Courses
const getAllCourses = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/courses`, {
      headers: {
        Authorization: ` ${token}`,
      },
    });

    console.log('All Courses:', response.data);
  } catch (error) {
    console.error('Error getting courses:', error.response?.data || error.message);
    process.exit(1);
  }
};

// Main function to run all steps sequentially
const main = async () => {
  // await createSuperAdmin(); // Create superadmin user
  const token = await loginSuperAdmin(); // Log in and get token
  await addMockCourses(token); // Add mock courses with superadmin permissions
  await getAllCourses(token); // Retrieve all courses
};

// Execute the script
main();
