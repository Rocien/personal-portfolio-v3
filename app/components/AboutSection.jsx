'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>TypeScript</li>
        <li>Express</li>
        <li>Next JS</li>
        <li>MongoDB</li>
        <li>React</li>
      </ul>
    )
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>Mobile App Design & Development, Alqonquin college</li>
        <li>Frontend Web Development, Coursera</li>
        <li>Networking & CCNA/CCNP</li>
      </ul>
    )
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className="list-disc pl-2">
        <li>Meta Frontend Web Development</li>
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
            Welcome to my portfolio! I&apos;m a dedicated full-stack web developer driven by a
            passion for crafting dynamic and engaging web experiences. Proficient in a variety of
            technologies including JavaScript, TypeScript, React, Next.js, Node.js, Express,
            MongoDB, HTML, CSS, Tailwind, Figma, A.Illustrator and Git, I specialize in building
            interactive and responsive web applications. My journey in the world of technology is
            fueled by a hunger for learning; I thrive on challenges and continually seek to expand
            my knowledge and skill set. Alongside my development expertise, I possess some design
            skills honed through hands-on experience. Currently in my final year pursuing Mobile
            Application Design and Development (MAD&D) at Algonquin College, I am poised to
            integrate cutting-edge technologies and design principles into innovative projects.
            Let&apos;s collaborate and bring your digital visions to life!
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
