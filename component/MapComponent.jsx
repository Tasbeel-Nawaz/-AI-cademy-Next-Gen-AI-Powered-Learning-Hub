import React from 'react';

const OfficeMap = () => {
  return (
    <div className="w-full h-[570px] rounded-lg overflow-hidden shadow-lg border border-gray-300 mt-16">
      <iframe
        title="My Office Location"
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        className="border-0"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=33.9086115,72.4873955&z=15&output=embed"
      ></iframe>
    </div>
  );
};

export default OfficeMap;
