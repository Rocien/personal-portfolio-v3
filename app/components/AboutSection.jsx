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
        <li>Node.js</li>
        <li>Express</li>
        <li>Next JS</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    )
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>MAD&D Alqonquin college</li>
      </ul>
    )
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className="list-disc pl-2">
        <li>Coursera frontend Web development</li>
        <li></li>
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
    <section className="text-white mt-48">
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
            I am a full stack web developer with a passion for creating interactive and responsive
            web applications. I have experience working with JavaScript, React, Redux, Node.js,
            Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and I am excited to
            work with others to create amazing applications.
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
