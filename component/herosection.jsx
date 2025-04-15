import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 via-indigo-600 to-indigo-800 text-white py-24 text-center">
      <h1 className="text-4xl font-extrabold mb-4">Start Learning Today</h1>
      <p className="text-lg mb-6">
        Top-rated courses to help you grow your skills and achieve your goals.
      </p>
      <div className="flex justify-center space-x-6">
        <Link
          to="/courses"
          className="bg-yellow-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
        >
          Explore Courses
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
