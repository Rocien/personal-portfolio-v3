import React from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-dark-light border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Link
          href={'/'}
          className="block relative w-12 h-12 sm:w-14 sm:h-14 lg:w-18 lg:h-18 left-1 hover:border hover:border-green-primary hover:shadow-md hover:shadow-green-primary/90 transform transition duration-300 hover:-translate-x-1 hover:-translate-y-1">
          <Image
            layout="fill"
            objectFit="contain"
            src="/images/RN-logo.png"
            alt="RN-logo"
            className=""
          />
        </Link>
        <Link
          className=" text-white-dark hover:text-green-primary hover:border-green-primary transform transition duration-300"
          href="https://github.com/Rocien"
          target="_blank">
          <small>&copy; 2025 Designed & Built by Rocien Nkunga</small>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
