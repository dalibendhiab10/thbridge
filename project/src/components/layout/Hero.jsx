import React from 'react';
import Button from '@/components/ui/Button';

const Hero = () => {
  const scrolltoCourses = () => {

    const element = document.getElementById("courses");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div id="home" className="relative h-screen pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6">
            Improve your skills on your own <br /> To prepare for a better future
          </h1>
          <Button className="" onClick={scrolltoCourses}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero;
