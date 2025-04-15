import React from "react";
import { useUniversities } from "./UniversityContext";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaWhatsapp,
  FaBook,
  FaGraduationCap,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const email = " aicadmy1@gmail.com";
  const subject = encodeURIComponent("Interested in connecting!");
  const body = encodeURIComponent("Hi, I wanted to get in touch with you.");
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    
      const {whatsapp} = useUniversities();

  return (
    <footer className="bg-gray-900 text-gray-300  pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mt-4">
            <div className="flex justify-center mb-4">
              <img src="/logo.png" alt="Company Logo" className="w-24" />
            </div>
            <p className="text-gray-400 mb-4 text-center">
              Your premier e-learning platform offering quality education for
              all.
            </p>
            <div className="flex items-center text-gray-400 hover:text-yellow-500 justify-center">
              <FaBook className="mr-2" />
              <Link to="course">100+ Courses</Link>
            </div>
            <div className="flex items-center text-gray-400 mt-1 hover:text-yellow-500 justify-center">
              <FaChalkboardTeacher className="mr-2" />
              <Link to={"/instructor"}>50+ Expert Instructors</Link>
            </div>
          </div>

          <div className="w-full md:w-1/3 lg:w-1/4  px-4 mt-15">
            <h3 className="text-xl font-semibold text-yellow-500 border-b-2 border-yellow-500 pb-2 mb-4">
              Learning Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to={"/course"}
                  className="text-gray-400 hover:text-yellow-500 transition flex items-center"
                >
                  <FaGraduationCap className="mr-2" />
                  Online Courses
                </Link>
              </li>
              <li>
                <Link
                  to={"/study"}
                  className="text-gray-400 hover:text-yellow-500 transition flex items-center"
                >
                  <FaBook className="mr-2" />
                  Study Materials
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-gray-400 hover:text-yellow-500 transition flex items-center"
                >
                  <FaChalkboardTeacher className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/blogpost"}
                  className="text-gray-400 hover:text-yellow-500 transition flex items-center"
                >
                  <FaGraduationCap className="mr-2" />
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 lg:w-1/4  px-4 mt-15">
            <h3 className="text-xl font-semibold text-yellow-500 border-b-2 border-yellow-500 pb-2 mb-4">
              Contact Us
            </h3>
            <address className="text-gray-400 not-italic mb-4">
              <Link to={"/map"} className="mb-2 flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Hazro City
              </Link>
              <a
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 flex items-center text-gray-400 hover:text-yellow-500 transition"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                aicadmy1@gmail.com
              </a>

              <a 
  href="tel:03348461030" 
  className="mb-4 flex items-center text-gray-400 hover:text-yellow-500 transition"
>
  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
  03348461030
</a>

            </address>
            <div className="flex space-x-4">
              <a
                href={"https://facebook.com/groups/643181826469883/"}
                className="text-gray-400 hover:text-blue-500 transition text-xl"
              >
                <FaFacebook />
              </a>
              <a
                href={"https://www.instagram.com/aicadmy?igsh=MWlneXp3eHB1cDIybw=="}
                className="text-gray-400 hover:text-[#E1306C] transition text-xl"
              >
                <FaInstagram />
              </a>
              <a
    onClick={whatsapp}
    className="text-gray-400 hover:text-green-500 transition text-xl"
    target="_blank" rel="noopener noreferrer"
  >
    <FaWhatsapp />
 
  </a>
  <a
    href="https://github.com/Tasbeel-Nawaz"
    className="text-gray-400 hover:text-white transition text-xl"
    target="_blank" rel="noopener noreferrer"
  >
    <FaGithub />
  </a>
  <a
    href="https://www.youtube.com/@Al-cademy" 
    className="text-gray-400 hover:text-red-500 transition text-xl"
    target="_blank" rel="noopener noreferrer"
  >
    <FaYoutube />
  </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Ai-Cademy - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
