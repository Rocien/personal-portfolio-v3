import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import Link from 'next/link';

const EmailSection = () => {
  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-primary to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-white-dark mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open. Whether you
          have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link className="text-4xl" href="github.com">
            <VscGithub />
          </Link>
          <Link className="text-4xl" href="linkedin.com">
            <FaLinkedin />
          </Link>
        </div>
      </div>

      <div>
        <form className="flex flex-col">
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
              placeholder="William@gmail.com"
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
              placeholder="Just saying Hello,"
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
            className="bg-green-primary hover:bg-green-secondary text-black font-medium py-2.5 px-5 rounded-lg w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
