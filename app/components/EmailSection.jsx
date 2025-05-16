'use client';

import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import Link from 'next/link';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/send';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // This telling the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json'
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log('Message sent.');
      setEmailSubmitted(true);
    }
  };
  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-secondary to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-white-dark mb-4 max-w-md">
          I am currently seeking full-time opportunities in mobile and full-stack web development.
          If you are hiring or looking to collaborate on impactful projects, feel free to connect
          with me. I am open to new challenges and ready to bring value to a forward thinking team.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            className="text-4xl hover:text-green-primary hover:border-green-primary transform transition duration-300"
            href="https://github.com/Rocien"
            target="_blank">
            <VscGithub />
          </Link>
          <Link
            className="text-4xl hover:text-green-primary hover:border-green-primary transform transition duration-300"
            href="https://www.linkedin.com/in/rociennkunga/"
            target="_blank">
            <FaLinkedin />
          </Link>
        </div>
      </div>

      <div>
        {emailSubmitted ? (
          <p className="text-green-primary text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-light-black2 border border-dark-light placeholder-white-dark text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="rocien@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-light-black2 border border-dark-light placeholder-white-dark text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Type your subject here,"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-light-black2 border border-dark-light placeholder-white-dark text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-green-primary hover:bg-green-secondary transform transition duration-300 text-black font-medium py-2.5 px-5 rounded-lg w-full cursor-pointer">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
