import { useState, useEffect } from "react";
import { Menu, Close } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [logout, setLogout] = useState(false);
  const location = useLocation();

  const University = location.pathname === "/university";
  const Book = location.pathname === "/book";
  const Courses = location.pathname === "/course";

  const toggleLog = () => {
    setLogout(!logout);
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <header className="bg-gray-900 text-white p-4 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl text-yellow-500 font-bold">
          <Link to="/">Ai-Cademy</Link>
        </h1>

        
        {!( Courses || University || Book ) && (
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-yellow-500">
              Home
            </Link>
            <Link to="/course" className="hover:text-yellow-500">
              Courses
            </Link>
            <Link to="/pricing" className="hover:text-yellow-500">
              Pricing
            </Link>
            <Link to="/blogpost" className="hover:text-yellow-500">
              Blog
            </Link>
            <Link to="/contact" className="hover:text-yellow-500">
              Contact
            </Link>
          </nav>
        )}

        
        {! ( Courses || University || Book ) && (
          <div className="hidden md:flex space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                {logout && (
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white"
                  >
                    Logout
                  </button>
                )}
                <span
                  className="text-2xl cursor-pointer font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-600 hover:text-white hover:scale-105 transform transition duration-500 ease-in-out capitalize pointer"
                  onClick={toggleLog}
                >
                  {user.name}
                </span>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-white"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}

     
{!( Courses || University || Book ) && (
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? (
            <Close fontSize="large" className="text-yellow-500" />
          ) : (
            <Menu fontSize="large" className="text-yellow-500" />
          )}
        </button>
        )}
        { ( Courses || University || Book )  && (
        <button onClick={() => setOpen(!open)} >
          {open ? (
            <Close fontSize="large" className="text-yellow-500" />
          ) : (
            <Menu fontSize="large" className="text-yellow-500" />
          )}
        </button>
        )}

      </div>

     
      {open && (
        <nav
          className={`${
           ( Courses || University || Book ) ? 'block' : 'md:hidden'
          } bg-gray-900 p-5 absolute flex flex-col items-center space-y-4 mt-5 right-2`}
        >
          <Link to="/" className="hover:text-yellow-500">
            Home
          </Link>
          <Link to="/course" className="hover:text-yellow-500">
            Courses
          </Link>
          <Link to="/pricing" className="hover:text-yellow-500">
            Pricing
          </Link>
          <Link to="/blog" className="hover:text-yellow-500">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-yellow-500">
            Contact
          </Link>

          {user ? (
            <div className="flex items-center space-x-4 mt-4">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-600 hover:text-white hover:scale-105 transform transition duration-500 ease-in-out capitalize">
                {user.name}
              </span>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
