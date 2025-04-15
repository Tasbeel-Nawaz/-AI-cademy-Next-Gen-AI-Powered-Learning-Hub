import React, { useState, useEffect } from "react";

const StudyMaterialSearch = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`https://openlibrary.org/search.json?q=study+material`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.docs || []);
      });
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Study Material Search</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => {
          return (
            <div
              key={book.key} 
              className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <img
                className="w-full h-48 object-cover"
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} 
                alt={book.title}
              />
              <div className="px-6 py-4">
                <div className=" text-xl mb-2 h-13 overflow-hidden">{book.title}</div> 
                <p className="text-gray-700 h-13 overflow-hidden text-base">
                  Author(s): {book.author_name ? book.author_name.join(", ") : "N/A"} 
                </p>
                <p className="text-gray-700 text-sm">
                  First published: {book.first_publish_year || "N/A"} 
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <a
                  href={`https://openlibrary.org${book.key}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white text-sm font-semibold py-1 px-2 rounded-full"
                >
                  View Details
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudyMaterialSearch;
