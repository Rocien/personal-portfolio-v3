'use client';

import React from 'react';
import Image from 'next/legacy/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const HeroSection = () => {
  // This function to download and open resume
  const downloadAndOpenResume = () => {
    // Path to the resume PDF file
    const resumeUrl = '/files/RocienNkunga__Resume.pdf';

    // Open the resume in a new tab with `_blank`
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');

    // Create a download anchor element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'RocienNkunga__Resume.pdf');

    // Append to the body and click to trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-primary">
              Hello, I&apos;m
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Rocien Nkunga',
                1500, // wait 1.5s before replacing to the second phrase
                'Full Stack Web.',
                1500,
                'Mobile',
                1000,
                'Developer',
                1500
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white-dark text-base sm:text-lg mb-6 lg:text-xl">
            With a passion for building interactive and responsive web applications.{' '}
          </p>
          <div>
            <p className="uppercase">Check out my resume</p>
            <button
              onClick={downloadAndOpenResume}
              className=" cursor-pointer px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 to-green-primary hover:text-green-primary hover:shadow-md hover:shadow-green-primary/90 transform transition duration-300 hover:-translate-x-1 hover:-translate-y-1 m-3">
              <span className="block bg-light-black2 rounded-full px-5 py-2">Grab A copy</span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full border border-green-primary w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden bg-light-black2 ">
            <Image layout="fill" src="/images/Hero.png" alt="Hero photo" objectFit="cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
