'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import Link from 'next/link';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <div className="space-y-8">
        {/* Programming Languages */}
        <div>
          <h4 className="text-sm text-gray-400 uppercase tracking-wide mb-1">
            Programming Languages
          </h4>
          <p className="text-xs text-gray-500 mb-2">Languages I use to build apps and systems.</p>
          <ul className="list-disc pl-5 space-y-1 text-white">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Swift</li>
            <li>Dart</li>
            <li>C#</li>
          </ul>
        </div>

        {/* Frontend */}
        <div>
          <h4 className="text-sm text-gray-400 uppercase tracking-wide mb-1">Frontend</h4>
          <p className="text-xs text-gray-500 mb-2">Libraries and frameworks for building UI.</p>
          <ul className="list-disc pl-5 space-y-1 text-white">
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>SwiftUI</li>
            <li>React Native</li>
          </ul>
        </div>

        {/* Backend & Database */}
        <div>
          <h4 className="text-sm text-gray-400 uppercase tracking-wide mb-1">Backend & Database</h4>
          <p className="text-xs text-gray-500 mb-2">Server-side logic and database tools.</p>
          <ul className="list-disc pl-5 space-y-1 text-white">
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Python/Django</li>
          </ul>
        </div>

        {/* Design & Tools */}
        <div>
          <h4 className="text-sm text-gray-400 uppercase tracking-wide mb-1">Design & Tools</h4>
          <p className="text-xs text-gray-500 mb-2">
            Tools I use to collaborate, design, and ship.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-white">
            <li>Figma</li>
            <li>Adobe Illustrator</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>Diploma - Mobile App Design and Development | Alqonquin college</li>
        <li>Certificate - Frontend Web Development | Coursera</li>
        <li>Diploma - Networking & CCNA/CCNP | Cape Peninsula University of Technology (CPUT)</li>
      </ul>
    )
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className="list-disc pl-2">
        <li>Meta Frontend Web Development</li>
        <li>CISCO CCNA International</li>
      </ul>
    )
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  // This function takes the id and set the tab transition
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div>
          <Image
            className="border border-green-primary hover:border-green-primary shadow-lg hover:shadow-green-primary/90 transform transition duration-300 hover:-translate-x-1 hover:-translate-y-1"
            src="/images/about-photo.jpeg"
            width={500}
            height={500}
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Welcome to my portfolio! I&apos;m a dedicated Mobile App and Full-Stack Web Developer
            with a passion for building clean, responsive, and user-focused digital experiences.
            <br />
            <br />
            Proficient in technologies like React, Next.js, Node.js, MongoDB, Swift, React Native
            and Flutter, I bring strong technical execution to both web and mobile platforms. I also
            collaborate closely with designers, working with tools like Figma and Illustrator to
            ensure polished UI integration. <br />
            <br /> I recently completed my diploma in Mobile Application Design and Development
            <span>
              <Link
                className="cursor-pointer underline hover:text-green-primary hover:border-green-primary transform transition duration-300"
                href="https://www.algonquincollege.com/mediaanddesign/program/mobile-application-design-and-development/#overview"
                target="_blank">
                (MAD&D)
              </Link>
            </span>{' '}
            at Algonquin College, and I&apos;m actively working on real-world projects through
            TechTonic Dev, where I lead development across web and mobile platforms.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>
              {' '}
              Education{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}>
              {' '}
              Certifications{' '}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
