import React from 'react';

const PrincipalComponent = () => {
  return (
    <div className="  flex items-center justify-center p-8">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 h-80 md:h-auto relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Principal"
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6">
            <h2 className="text-white text-3xl font-bold">Tasbeel Nawaz</h2>
          </div>
        </div>
        
       
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Principal's Message</h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
          At AI-Cademy, we believe that education is more than just learning—it's about fostering curiosity, creativity, and resilience. As we embrace the power of technology, our mission is to shape a future where innovation meets purpose. Together, let's redefine learning and unlock endless possibilities.
          </p>
          
          <div className="flex items-center">
            <div className="w-12 h-1 bg-indigo-600 mr-4"></div>
            <span className="text-indigo-600 font-medium">Tasbeel Nawaz</span>
          </div>
          <button className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors duration-300 self-start shadow-lg hover:shadow-xl">
            Read Full Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrincipalComponent;