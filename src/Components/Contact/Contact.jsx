import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Validation Function
  const validate = () => {
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required.";
    } else if (name.length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required.";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;

    setLoading(true);

    const formData = { name, email, message };

    try {
      const response = await axios.post("http://localhost:8080/api/contact/submit", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200 || response.status === 201) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting message:", error);
      alert("An error occurred. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="Footer" className="flex flex-col md:flex-row justify-around bg-[#465697] text-white p-10 md:p-12 items-center">
      {/* Contact Information */}
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">Feel free to reach out to me</h3>

        <ul className="text-sm md:text-xl mt-5">
          <li className="flex gap-2 items-center">
            <MdOutlineEmail size={20} />
            <a href="mailto:shreejknair16@gmail.com" className="text-blue-200 hover:underline">
              shreejknair16@gmail.com
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <CiLinkedin />
            <a 
              href="https://www.linkedin.com/in/sreelakshmy-jayakumar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-200 hover:underline"
            >
              linkedin.com/in/sreelakshmy-jayakumar
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <FaGithub />
            <a 
              href="https://github.com/shreejknair" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-200 hover:underline"
            >
              github.com/shreejknair
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className="bg-[#3a4b8a] p-6 rounded-3xl shadow-md mt-6 md:mt-0 w-full md:w-1/3">
        <h2 className="text-xl md:text-2xl font-semibold text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col mt-4">
          {/* Name Field */}
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 rounded-md border-none outline-none text-black"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}

          {/* Email Field */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 mt-3 rounded-md border-none outline-none text-black"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}

          {/* Message Field */}
          <textarea
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-2 mt-3 rounded-md border-none outline-none text-black h-24"
          ></textarea>
          {errors.message && <p className="text-red-500">{errors.message}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className={`mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition-all duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
