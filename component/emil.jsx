import React from 'react';

const EmailMeCard = () => {
  const email = 'youremail@example.com'; // 👈 yahan apna email daalo
  const subject = encodeURIComponent('Interested in connecting!');
  const body = encodeURIComponent('Hi, I wanted to get in touch with you.');

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

  return (
    <div className="max-w-md mx-auto bg-white shadow-md border border-gray-200 rounded-xl p-6 text-center my-20">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📧 Email Me</h2>
      <p className="text-gray-600 mb-6">
        Kisi bhi baat ke liye seedha mujhe Gmail pe message bhejein.
      </p>
      <a
        href={gmailLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
      >
        Send Email via Gmail
      </a>
    </div>
  );
};

export default EmailMeCard;
