import axios from 'axios';
import { useState } from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { useUniversities } from "./UniversityContext";
const Contact = () => {
  const { whatsapp } = useUniversities();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
const [success,setsuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:7000/contact", { name, email, message })
      .then((response) => {
        console.log("Success:", response.data);
        setName("");
        setEmail("");
        setMessage("");
        setsuccess(true);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-100 via-white to-blue-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
     
          <div className="lg:w-1/3 bg-white rounded-2xl shadow-xl px-8 py-14 h-fit">
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <FaPhone className="text-lg" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Phone</h4>
                  <a href="tel:03185350713" className="text-gray-600 hover:text-blue-600 transition">
                    +92 318 5350713
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Email</h4>
                  <a href="mailto:tasbee@gmail.com" className="text-gray-600 hover:text-blue-600 transition">
                    tasbee@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Ai-Cademy Headquarters</h4>
                  <p className="text-gray-600">Online E-Learning Platform</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="font-medium text-gray-700 mb-3">Follow Us</h4>
              <div className="flex gap-4">
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
          {success ? (
  <div className="lg:w-2/3 bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center text-center animate-fade-in">
    <div className="text-green-600 text-6xl mb-4">✅</div>
    <h2 className="text-3xl font-semibold text-green-700 mb-2">Message Sent Successfully!</h2>
    <p className="text-gray-600 mb-6">Thank you for reaching out. We’ll get back to you soon.</p>
    <button
      onClick={() => setsuccess(false)}
      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium"
    >
      Send Another Message
    </button>
  </div>
) : (


          <div className="lg:w-2/3 bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">Send Us a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
     )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
