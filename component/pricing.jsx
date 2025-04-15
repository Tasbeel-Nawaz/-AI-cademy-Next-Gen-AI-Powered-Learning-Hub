import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 

const Pricing = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 my-8">
          Our Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Basic Plan</h3>
            <p className="text-gray-600 mb-4">Perfect for beginners!</p>
            <div className="text-3xl font-bold text-blue-500 mb-4">$19/month</div>
            <ul className="list-disc list-inside mb-6">
              <li className="text-gray-700">Access to basic courses</li>
              <li className="text-gray-700">Weekly webinars</li>
              <li className="text-gray-700">Email support</li>
            </ul>
            {user ? ( 
            
            <span className="flex justify-center items-center text-2xl font-bold bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 hover:scale-105 transform transition duration-500 ease-in-out capitalize">
            {user.name}
          </span>
          
            
            ) : (
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                Sign Up
              </button>
            )}
          </div>

          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Premium Plan</h3>
            <p className="mb-4">For advanced learners</p>
            <div className="text-3xl font-bold mb-4">$49/month</div>
            <ul className="list-disc list-inside mb-6">
              <li>Access to all courses</li>
              <li>Weekly group mentoring</li>
              <li>Priority support</li>
            </ul>
            {user ? (
            
               <span className="flex justify-center items-center text-2xl font-bold bg-white text-blue-500 px-6 py-2 rounded-md hover:bg-amber-100 hover:scale-105 transform transition duration-500 ease-in-out capitalize">
            {user.name}
          </span>
              
            ) : (
              <button className="bg-white text-blue-500 px-6 py-2 rounded-md hover:bg-gray-200">
                Sign Up
              </button>
            )}
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Enterprise Plan</h3>
            <p className="text-gray-600 mb-4">For teams and organizations</p>
            <div className="text-3xl font-bold text-blue-500 mb-4">$99/month</div>
            <ul className="list-disc list-inside mb-6">
              <li className="text-gray-700">Access to all courses</li>
              <li className="text-gray-700">1-on-1 mentoring</li>
              <li className="text-gray-700">Custom learning path</li>
            </ul>
            <Link to="/contact" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
