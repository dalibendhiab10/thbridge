import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import SEO from "@/SEO";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import HomePage from "@/pages/HomePage";
import Login from "@/pages/Login";
import CourseDetails from "@/pages/CourseDetails";
import ErrorPage from "@/pages/ErrorPage";

import { ToastContainer } from 'react-toastify';
import axios from "axios";

import { AuthProvider } from "@/hooks/useAuth";
import PrivateRoute from "@/hooks/PrivateRoute";
import Layout from "@/components/admindash/Layout";

import AdminLogin from "@/pages/admin/AdminLogin";
import Dashboard from "@/pages/admin/Dashboard";
import Courses from "@/pages/admin/AdminCourses";

axios.defaults.baseURL = import.meta.env.VITE_API_HOST;

function App() {
  const location = useLocation();

  const showHeaderAndFooter =
    location.pathname === "/home" ||
    location.pathname === "/login" ||
    location.pathname.includes("/courses/");

  return (
    <>
      <SEO />

      {showHeaderAndFooter && <Header />}
      <ToastContainer />
      <AuthProvider>
        {/* //vitrine */}

        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/404" element={<ErrorPage />} />

          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/AdminLogin" element={<AdminLogin />} />
          {/* Private Route for Admin Pages */}
          {/* element={<PrivateRoute />} */}


        </Routes>


          <Layout>
          <Routes >
            {/* <Route element={<PrivateRoute />}> */}

              <Route path="/adminDash" element={<Dashboard />} />
              <Route path="/adminCourses" element={<Courses />} />
            {/* </Route> */}
          </Routes>
        </Layout>



      </AuthProvider>


      {showHeaderAndFooter && <Footer />}

    </>
  );
}

export default App;
