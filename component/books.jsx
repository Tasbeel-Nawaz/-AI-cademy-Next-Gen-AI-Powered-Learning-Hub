import React, { useState } from 'react';
import { useUniversities } from './UniversityContext';
import SearchIcon from "@mui/icons-material/Search";

const App = () => {
  const { programbooks } = useUniversities();
  const [searchbook, setsearchbook] = useState("");

  const filteredbook = programbooks.filter((book) =>
    book.title.toLowerCase().includes(searchbook.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen p-6">
      <div className="fixed top-2 left-40 md:left-70 z-50 px-6">
        <div className="absolute w-50 md:w-100 rounded-xl shadow-lg">
          <input
            type="text"
            placeholder="Search by country..."
            value={searchbook}
            onChange={(e) => setsearchbook(e.target.value)}
            className="w-full pl-12 pr-4 py-3 text-white border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 transition duration-300"
          />
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {filteredbook.map((book, index) => {
          const imageUrl = book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : 'https://via.placeholder.com/150x220?text=No+Cover';

          return (
            <div key={index} className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-lg transition">
              <img src={imageUrl} alt={book.title} className="w-full h-40 object-cover rounded mb-3" />
              <h2 className="text-1xl h-20 overflow-hidden font-semibold">{book.title}</h2>
              <p className="text-sm my-2 h-15 overflow-hidden text-gray-600">By:- {book.author_name?.join(', ')}</p>
              <p className="text-sm text-gray-500">First Published: {book.first_publish_year}</p>
              <a
                href={`https://openlibrary.org${book.key}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 "
              >
                View Book
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
