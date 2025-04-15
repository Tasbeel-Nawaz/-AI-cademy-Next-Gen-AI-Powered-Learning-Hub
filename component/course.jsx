import React, { useState } from 'react';
import { useUniversities } from './UniversityContext';
import SearchIcon from "@mui/icons-material/Search";
const Courses = () => {
const { getFallbackImage, courses} = useUniversities();
const [searchcourse, setsearchcourse] = useState ("");

const filteredcourse = courses.filter((course) => course.title.toLowerCase().includes(searchcourse.toLowerCase()));
  return (
    <div className=" min-h-screen py-10 px-4">
      <h1 className="mt-12 text-4xl font-semibold mb-4 text-center text-gray-800  ">
        Free Programming Courses
      </h1>
      <div className="fixed top-2 left-40 md:left-70 z-50 px-6">
        <div className="absolute w-50 md:w-100 rounded-xl shadow-lg">
          <input
            type="text"
            placeholder="Search by country..."
            value={searchcourse}
            onChange={(e) => setsearchcourse(e.target.value)}
            className="w-full pl-12 pr-4 py-3 text-white border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 transition duration-300"
          />
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredcourse.map((book) => (
          <div
            key={book.key}
            className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105"
          >
            <img
              src={
                book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                  : getFallbackImage(book.title) 
              }
              alt={book.title}
              className="w-full h-48 object-cover mb-4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <p className="text-xl font-semibold mb-2 text-gray-900  h-6 overflow-hidden">{book.title}</p>
            <p className="text-lg text-gray-700 mb-2">Launch Date: {book.first_publish_year}</p>
            <p className="text-lg text-gray-700 mb-4">Student Enrollment: {book.edition_count}</p>
            <p className="text-sm text-gray-600">
              {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
