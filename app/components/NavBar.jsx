import React from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';
import NavLink from './NavLink';

const navLinks = [
  {
    title: 'About',
    path: '#about'
  },
  {
    title: 'Projects',
    path: '#projects'
  },
  {
    title: 'Contact',
    path: '#contact'
  }
];

export const NavBar = () => {
  return (
    <nav>
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={'/'}
          className="block relative w-12 h-12 sm:w-14 sm:h-14 lg:w-18 lg:h-18 left-6">
          <Image
            layout="fill"
            objectFit="contain"
            src="/images/RN-logo.png"
            alt="RN-logo"
            className="bg-gradient-to-br hover:text-green-primary hover:shadow-md hover:shadow-green-primary/90 transform transition duration-300 hover:-translate-x-1 hover:-translate-y-1"
          />
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
