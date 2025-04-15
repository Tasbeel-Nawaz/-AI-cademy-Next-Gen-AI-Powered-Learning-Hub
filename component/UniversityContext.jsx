import { createContext, useContext, useEffect, useState } from "react";

const UniversityContext = createContext();

export function UniversityProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [books, setBooks] = useState([]);
  const [programbooks, setprogrambooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://openlibrary.org/search.json?q=c++ + python + java ')
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.docs); 
      });
  }, []);
  const getFallbackImage = (title) => {
    if (title.toLowerCase().includes("python")) {
      return "/python.jpg";  
    } else if (title.toLowerCase().includes("java")) {
      return "/java.jpg";   
    } else if (title.toLowerCase().includes("c++")) {
      return "/c++.avif";   
    } else {
      return "/computer.jpg"; 
    }
  };




  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setUniversities(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=programming&langRestrict=en")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.items || []);
      });
  }, []);

  useEffect(() => {
    fetch('https://openlibrary.org/search.json?q=programming&limit=500')
      .then((res) => res.json())
      .then((data) => {
        setprogrambooks(data.docs);
      });
  }, []);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=500')
    .then((res) => res.json())
       .then((data) => {
      setUsers(data.results);
  });
}, []);

const whatsapplink =  "https://chat.whatsapp.com/JV2cgaMv68aB4hK22fvaYQ";
const whatsappnumber = "https://wa.me/923348461030";
const whatsapp = () => {
  try {
    const newwindow = window.open(whatsapplink, "_blank");

    setTimeout(() => {
      if (newwindow) {
        newwindow.location.href = whatsappnumber;
      } else {
        window.open(whatsappnumber, "_blank");
      }
    }, 3500);
  } catch (err) {
    window.open(whatsappnumber, "_blank");
  }
};


  return (
    <UniversityContext.Provider value={{ universities, books, loading, programbooks, courses, getFallbackImage, users, whatsapp }}>
      {children}
    </UniversityContext.Provider>
  );
}

export function useUniversities() {
  return useContext(UniversityContext);
}
