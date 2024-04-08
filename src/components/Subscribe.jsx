import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import logo2 from "../assets/foyImages/logo2.png";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const serviceId = "service_yo2uaw9"; // Replace with your EmailJS service ID
  const templateId = "template_7mhi697"; // Replace with your EmailJS template ID
  const userId = "jg4D5D4SI0Kdvt0a5"; // Replace with your EmailJS user ID

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Define template parameters
    const templateParams = {
      email: email,
    };

    // Send email using emailjs
    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
      console.log("Email sent successfully!");
      setShowSuccessMessage(true);
      setTimeout(() => {
        navigate("/home");
      }, 500);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black ">
      {" "}
      {/* Add bg-black class */}
      <div className="max-w-xl text-center mx-auto mt-2 pt-2">
        <div className="mb-5">
          <img
            src={logo2}
            alt="Logo"
            className="mx-auto mb-3"
            style={{ maxWidth: "200px", height: "auto" }} // Increase the maxWidth to make the image larger
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <div className="w-full">
              <label htmlFor="hero-input" className="sr-only">
                Search
              </label>
              <input
                type="email"
                id="hero-input"
                name="hero-input"
                value={email}
                onChange={handleEmailChange}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-black disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-amber-400 disabled:opacity-50 disabled:pointer-events-none"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
      {showSuccessMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-100 bg-opacity-90">
          <div className="bg-white p-6 rounded-lg">
            <svg
              viewBox="0 0 24 24"
              className="text-green-600 w-16 h-16 mx-auto my-6"
            >
              <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              ></path>
            </svg>
            <div className="text-center">
              <h3 className="md:text-2xl text-base text-gray-900 font-semibold">
                Successfully subscribed!
              </h3>
              <p className="text-gray-600 my-2">
                Thank you for subscribing to our newsletter.
              </p>
              <p>Have a great day!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscribe;
