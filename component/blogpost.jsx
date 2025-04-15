import axios from 'axios';
import React, { useState, useEffect } from 'react';

const MeriElaanBlog = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const subscriptionStatus = localStorage.getItem("subscribed");

    if (storedUser) {
      setUser(storedUser);
    }

    if (subscriptionStatus === "true") {
      setSubscribed(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:7000/blogpost', { email })
      .then((res) => {
        if (res.data.success) {
          console.log("Subscription success");
          setSubscribed(true);
          localStorage.setItem("subscribed", "true");
        } else {
          console.log("Subscription failed!");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  const blogPosts = [
    {
      id: 1,
      title: "Ai-Cademy: A New Beginning",
      excerpt: "Discover how Meri Elaan is revolutionizing the way we think about personal announcements and public notices.",
      imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      date: "May 15, 2023",
      categories: ["Announcements", "Updates"],
      readTime: "4 min read"
    },
    {
      id: 2,
      title: "How to Make Effective Public Announcements",
      excerpt: "Learn the best practices for creating announcements that get noticed and remembered.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      date: "April 28, 2023",
      categories: ["Tips", "Guide"],
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "The Importance of Public Notices in Digital Age",
      excerpt: "Why traditional methods of public notices still matter in our increasingly digital world.",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      date: "April 10, 2023",
      categories: ["Opinion", "Digital"],
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "Ai-Cademy Mobile App Launch",
      excerpt: "Everything you need to know about our new mobile application for instant announcements.",
      imageUrl: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6",
      date: "March 22, 2023",
      categories: ["Product", "Mobile"],
      readTime: "3 min read"
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto my-6">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl absolute ml-150 my-15 z-10" style={{
          fontFamily: "'Playfair Display', serif",
          textShadow: '2px 2px 6px rgba(0, 0, 0, 0.4)',
        }}>
          Blog
        </h1>
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <img
            className="w-full h-96 object-cover"
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Featured post"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90" />
          <div className="absolute bottom-0 left-0 p-10 text-white">
            <div className="flex space-x-4 mb-4">
              <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                Featured
              </span>
              <span className="inline-block bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                Announcement
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-2">Introducing Ai-Cademy </h2>
            <p className="text-lg">The next generation of public announcement platform is here.</p>
            <p className="text-lg mb-4">
              Latest updates, news, and articles about announcements and public notices.
            </p>
            <div className="flex items-center text-sm">
              <span>Aug 21, 2025</span>
              <span className="mx-2">•</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories.map((category, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <a href="#" className="block mt-2">
                  <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                </a>
                <p className="mt-3 text-base text-gray-500">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  <time dateTime={post.date}>{post.date}</time>
                  <span className="mx-1">•</span>
                  <span>{post.readTime}</span>
                </div>
                <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-16 text-center">
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
          Load more articles
          <svg className="ml-3 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-20 bg-blue-700 rounded-xl p-8 md:p-12">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white">Stay updated with Ai-Cademy</h3>
            <p className="mt-2 text-blue-100">
              Get the latest articles and announcements delivered to your inbox
            </p>
          </div>
          {subscribed ? (
            <div
              className="text-white text-2xl cursor-pointer hover:underline"
              onClick={() => {
                setSubscribed(false);
                localStorage.removeItem("subscribed");
              }}
            >
              {user && user.name ? (
                <span className="flex flex-col justify-center items-center text-2xl font-bold text-blue-500 px-6 py-2">
                  <span className="bg-white px-4 py-1 rounded-md hover:bg-amber-100 hover:scale-105 transform transition duration-500 ease-in-out capitalize">
                    {user.name}
                  </span>
                  <span className="mt-1 capitalize text-white">Unsubscribed</span>
                </span>
              ) : (
                <span className="text-white text-lg font-semibold">Unsubscribed</span>
              )}
            </div>
          ) : (
            <div className="md:w-1/2">
              <form className="flex" onSubmit={handleSubmit}>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-0 rounded-l-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-r-md shadow-sm text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Subscribe
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeriElaanBlog;
