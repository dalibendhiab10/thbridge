import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="font-space-grotesk h-screen bg-black text-white flex items-center justify-center">
      <section className="home grid max-w-5xl grid-cols-1 gap-12 px-8 lg:grid-cols-2 lg:px-16">
        <div className="home__data text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
          <p className="pb-2 font-semibold">Error 404</p>
          <h1 className="pb-4 text-4xl font-bold lg:text-6xl">
            Hey <span className="text-[#E62B1E]">Buddy</span>
          </h1>
          <p className="pb-8 font-semibold">
            We can't seem to find the page <br />
            you are looking for.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-white border-2 border-transparent py-4 px-8 font-bold text-[#E62B1E] hover:bg-[#E62B1E] hover:text-white hover:border-white transition-all"
          >
            Go Home
          </Link>
        </div>

        <div className="home__img flex justify-center">
          <img
            src="/error-img.png"
            className="w-64 animate-floting lg:w-[400px]"
            alt="home image"
          />
        </div>

       
      </section>
    </div>
  );
};

export default ErrorPage;