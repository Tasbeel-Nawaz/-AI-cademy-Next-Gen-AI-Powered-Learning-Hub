import React from "react";
import HeroSection from "./herosection";
import Pricipal from "./pricipal";
import Aicademy from "./aicademy";
import { useUniversities } from "./UniversityContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { universities, loading, getFallbackImage, courses, users } = useUniversities();
  const course =courses.slice(0,10);
  const universitiesToShow = universities.slice(0, 5);
  const showuser = users.slice(0,3);
  const { books } = useUniversities();
  return (
    <div>
      <HeroSection />
      <Pricipal />
      <Aicademy />


      <div className=" min-h-screen py-10 px-4">
      <p className="text-3xl font-semibold  mb-3 left-0 ">Top Programming Books</p>
        <Link
          to={"/course"}
          className="font-semibold text-blue-700 absolute text-3xl -mt-12 right-12 hover:border-b-2 cursor-pointer "
        >
          More
        </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {course.map((book) => (
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

      <div className="px-6 ">
        <p className="text-3xl font-semibold  mb-3 left-0 ">Top Programming Books</p>
        <Link
          to={"/book"}
          className="font-semibold text-blue-700 absolute text-3xl -mt-12 right-12 hover:border-b-2 cursor-pointer "
        >
          More
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {books.map(({ id, volumeInfo }) => (
            <div
              key={id}
              className=" p-4 rounded shadow flex flex-col h-full"
            >
              <img
                src={
                  volumeInfo.imageLinks?.thumbnail ||
                  "https://via.placeholder.com/150"
                }
                alt={volumeInfo.title}
                className="w-full h-40 "
              />
              <h2 className="font-semibold my-2  ">
                {volumeInfo.title}
              </h2>
              <p className="text-sm text-gray-600 truncate">
                {volumeInfo.authors?.join(", ") || "Unknown Author"}
              </p>
              <p className="text-sm text-gray-600 flex-grow line-clamp-3 overflow-hidden my-2">
                {volumeInfo.description?.replace(/<[^>]+>/g, "") ||
                  "No description available."}
              </p>
              <Link
                to={volumeInfo.infoLink}
                target="_blank"
                className="text-white text-center p-2 border-10 mt-auto bg-blue-500"
              >
                Get the Book
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className=" m-5 px-4  ">
        <p className="font-semibold py-5 text-3xl pl-6 ">Top University</p>
        <Link
          to={"/university"}
          className="font-semibold text-blue-700 absolute text-3xl -mt-15 right-12 hover:border-b-2 cursor-pointer "
        >
          More
        </Link>
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center text-gray-500 text-lg">
              Loading universities...
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
              {universitiesToShow.map((uni, index) => (
                <div
                  key={index}
                  className=" border-2 border-amber-50 p-6 rounded-lg shadow-xl flex flex-col items-center text-center transition transform hover:scale-105"
                >
                  {uni.web_pages[0] && (
                    <img
                      src={`https://logo.clearbit.com/${
                        new URL(uni.web_pages[0]).hostname
                      }`}
                      alt="University Logo"
                      className="w-16 h-16 mb-4 rounded-lg object-contain "
                    />
                  )}
                  <h2 className="text-xl h-20 overflow-hidden mb-4 font-semibold text-gray-800">
                    {uni.name}
                  </h2>
                  <p className="text-red-600 mb-4">{uni.country}</p>
                  <a
                    href={uni.web_pages[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Visit Website
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto p-4">
      <p className="font-semibold py-5 text-3xl pl-6 ">Testimonials</p>
        <Link
          to={"/testnomial"}
          className="font-semibold text-blue-700 absolute text-3xl -mt-15 right-12 hover:border-b-2 cursor-pointer "
        >
          More
        </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {showuser.map((user, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <img src={user.picture.large} alt={user.name.first} className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-center">{user.name.first} {user.name.last}</h2>
            <p className="text-sm text-gray-600 text-center">{user.email}</p>
            <p className="text-sm text-gray-600 text-center">{user.location.country}, {user.location.timezone.offset }</p>
          </div>
        ))}
      </div>
    </div>

   
    </div>
  );
}
