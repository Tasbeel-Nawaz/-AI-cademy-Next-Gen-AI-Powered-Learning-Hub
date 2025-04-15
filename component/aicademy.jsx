import React from "react";

const AcademyAd = () => {
  return (
    <div className="min-h-[400px]  flex items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Invest in your career with{" "}
            <span className="text-blue-600">Ai-Cademy Plus</span>
          </h1>
          <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed">
            Get access to videos in over 90% of courses, Specializations, and
            Professional Certificates
          </p>
          <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed">
            taught by top instructors from leading universities and companies.
          </p>

          <div className=" flex flex-wrap gap-2 md:gap-4 mb-6 md:mb-8">
            <span className="cursor-pointer hover:bg-blue-300 px-3 py-1 md:px-4 md:py-2 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-medium">
              Learn anything
            </span>
            <span className="px-3 py-1 md:px-4 md:py-2 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-medium cursor-pointer hover:bg-blue-300">
              Skills
            </span>
            <span className=" cursor-pointer hover:bg-blue-300 px-3 py-1 md:px-4 md:py-2 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-medium">
              Career
            </span>
            <span className="px-3 py-1 md:px-4 md:py-2 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-medium cursor-pointer hover:bg-blue-300">
              Certifications
            </span>
            <span className="cursor-pointer hover:bg-blue-300 px-3 py-1 md:px-4 md:py-2 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-medium">
              ACTIVITIES
            </span>
          </div>

          <button className="cursor-pointer px-6 py-2 md:px-8 md:py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 self-start shadow-lg">
            Get Started
          </button>
        </div>

        <div className="md:w-1/2 h-64 md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Students learning with laptops"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-transparent md:hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default AcademyAd;
