import { useState } from "react";
import { useUniversities } from "./UniversityContext";
import SearchIcon from "@mui/icons-material/Search";

export default function UniversityList() {
  const { universities, loading } = useUniversities();
  const [countrySearch, setCountrySearch] = useState("");

  const filteredUniversities = universities.filter((uni) =>
    countrySearch === "" || uni.country.toLowerCase().includes(countrySearch.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen px-6">
      <div className="max-w-7xl mx-auto">
        <div className="absolute top-2 left-40 md:left-70 z-50 px-6">
          <div className="absolute w-50 md:w-100 rounded-xl shadow-lg">
            <input
              type="text"
              placeholder="Search by country..."
              value={countrySearch}
              onChange={(e) => setCountrySearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 text-white border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 transition duration-300"
            />
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

     
        <div className="pt-[120px] pb-12">
          <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-10 tracking-tight">
            University List
          </h1>

          {loading ? (
            <div className="text-center text-gray-600 text-xl">Loading universities...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredUniversities.map((uni, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
                >
                  {uni.web_pages[0] && (
                    <img
                      src={`https://logo.clearbit.com/${new URL(uni.web_pages[0]).hostname}`}
                      alt="University Logo"
                      className="w-20 h-20 mb-6 rounded-full object-cover"
                    />
                  )}
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{uni.name}</h2>
                  <p className="text-lg text-gray-500 mb-4">{uni.country}</p>
                  <a
                    href={uni.web_pages[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
                  >
                    Visit Website
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
