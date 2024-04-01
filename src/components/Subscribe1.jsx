import React, { useState } from "react";

const Subscribe1 = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Sending email to:", email);
    // Here you would typically send the email using a backend service
  };

  return (
    <div>
      <>
        {/* Subscribe */}
        <div className="max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto">
          <div className="max-w-xl text-center mx-auto">
            <div className="mb-5">
              <h2 className="text-2xl font-bold md:text-3xl md:leading-tight">
                Sign up to our newsletter
              </h2>
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
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-black text-white hover:bg-white hover:text-black disabled:opacity-50 disabled:pointer-events-none"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* End Subscribe */}
      </>
    </div>
  );
};

export default Subscribe1;
