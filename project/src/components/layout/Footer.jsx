import React from "react";
import { BookOpen, Mail, Phone, MapPin,Send } from "lucide-react";

const Footer = () => (
  <footer className="bg-white text-black">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center  ">
            <span className="text-xl font-bold ">The </span>
            <img
              src="/logo.png"
              alt="logo"
              className="h-10  mr-[-10px] "
            />{" "}
            <span className=" text-xl font-bold ">ridge </span>
          </div>
          <p className="text-gray-400">Learn something new.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#courses" className="hover:text-blue-500">
                Courses
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">
            Contact Info
          </h3>
          <ul className="space-y-4">
            <a
              className="flex items-center space-x-2"
              href="mailto:Contact@9antra.tn"
            >
              <Mail className="h-5 w-5" color="#ae2f64" />
              <span>Contact@9antra.tn</span>
            </a>
            <a className="flex items-center space-x-2" href="tel:+21658840064">
              <Phone className="h-5 w-5" color="#ae2f64" />
              <span>+216 58 840 064</span>
            </a>
            <a
              className="flex items-center space-x-2"
              href="https://maps.app.goo.gl/HbXYYW76u3yFscsm9"
            >
              <MapPin className="h-5 w-5 " color="#ae2f64" />
              <span>Lac 1 level 1, Tunis, Tunisia</span>
            </a>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">
            Newsletter
          </h3>
          <p className="mb-4">Subscribe to get updates on new courses</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-white border border-primary rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
            />
            <button className="absolute top-1/2 right-3 transform -translate-y-1/2 text-primary hover:text-primary">
              <Send className="h-5 w-5 " color="#ae2f64" />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center">
        <p>&copy; {new Date().getFullYear()} 9antra.tn - The Bridge. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
