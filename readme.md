
# Course Management System

**Note**: I used a domain name that does not belong to me due to DNS propagation issues with my own domain.

## Description

The **Course Management System** is a web application that allows administrators to manage courses. It includes functionalities for adding, editing, deleting, and searching courses. The system provides an admin dashboard with modals for managing course information, including title, description, price, and hours. The frontend is built with React, while the backend is powered by Node.js with Express.js and MongoDB.

## Frontend

The frontend of the Course Management System is built using **React** with hooks. It leverages the following technologies and libraries:

- **React**: For building the user interface.
- **Axios**: For making HTTP requests to the backend API.
- **Tailwind CSS**: For responsive and customizable styling.
- **React Router**: For managing routing within the application.
- **Lucide Icons**: For icons used throughout the UI.
  
The frontend also relies on an environment configuration file (`.env`) to store environment-specific variables.

### Frontend Setup

The frontend uses the `.env` file for configuring environment variables, such as the backend API URL(`VITE_API_HOST`). Make sure to create this file and include any necessary variables.

## Backend

The backend is built with **Node.js** using the **Express.js** framework. It interacts with a **MongoDB** database to store and manage course data. The backend API provides routes for creating, updating, deleting, and fetching courses.

- **Node.js**: JavaScript runtime for the server-side.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database to store course data.
  
Similar to the frontend, the backend also uses an `.env` file to store environment-specific configurations, such as the MongoDB URI and server port.

### Backend Setup

The backend also uses a `.env` file to configure environment variables, such as the MongoDB URI and server port. Ensure you configure the `.env` file with the correct settings for your environment.

## Deployment

For deployment, the project uses **Docker** to containerize both the frontend and backend applications, making it easy to deploy on any server. Docker ensures that the application can run consistently across different environments by bundling all dependencies into containers.

1. **Docker Setup**: The project includes a `docker-compose.yml` file for running both the frontend and backend in Docker containers.
2. **PM2**: For managing the backend process, **PM2** is used to ensure that the backend stays running in production.

