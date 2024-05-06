'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    description:
      'My portfolio website, built using Next.js and Tailailwind CSS, is designed to showcase my skills and projects in a modern and responsive interface. This site leverages the robust features of Next.js for enhanced performance and SEO, paired with the utility-first styling of Tailwind CSS for a sleek, custom look. It serves as a dynamic platform to display my professional work and technical abilities, highlighting my expertise in contemporary a fullstack web development',
    image: '/images/projects/p6.jpg',
    tag: ['All', 'WebSite'],
    gitUrl: 'https://github.com/Rocien/personal-portfolio-v3',
    previewUrl: 'https://www.rociennkunga.com/'
  },
  {
    id: 2,
    title: 'ScrapSkip Web app',
    description:
      'Authentication and CRUD operations, ScrapSkip is a Next.js-based marketplace web app designed to buy and sell unwanted household items. It leverages Tailwind CSS for styling, Express.js for server-side logic, and MongoDB for data management. The app features secure user authentication via Google OAuth, ensuring a seamless and safe user experience.',
    image: '/images/projects/p1.jpg',
    tag: ['All', 'WebApp'],
    gitUrl: 'https://github.com/Rocien/scrapskip-app',
    previewUrl: 'https://scrapskip.vercel.app/'
  },
  {
    id: 3,
    title: 'ClimaSphere Web application',
    description:
      'ClimaSphere is a sleek weather application built with React.js and styled using Tailwind CSS along with CSS modules. It enables users to easily search for and view the current weather conditions of any location. Leveraging the OpenWeather API, ClimaSphere provides accurate and up-to-date weather information, making it a go-to resource for all your weather needs',
    image: '/images/projects/p2.jpg',
    tag: ['All', 'WebApp'],
    gitUrl: 'https://github.com/Rocien/ClimaSphere-weather-app',
    previewUrl: 'https://climasphere.vercel.app/'
  },
  {
    id: 4,
    title: 'Bloom&Glow E-commerce App',
    description:
      "This is a stylish frontend-only e-commerce website for Broom&Glow Shop, currently under construction as part of a freelance project. Built using React.js and Tailwind CSS, the site offers a modern, responsive design that showcases Broom&Glow's products with an emphasis on visual appeal and user experience. This project highlights a sleek interface designed to enhance customer interaction and sales, even as development continues to refine and expand its features.",
    image: '/images/projects/p3.jpg',
    tag: ['All', 'WebApp'],
    gitUrl: 'https://github.com/Rocien/bloom-and-glow',
    previewUrl: 'https://rocien.github.io/bloom-and-glow/'
  },
  {
    id: 5,
    title: 'Vanilla JS Portfolio Website',
    description:
      'Portfolio Website V1 is the initial version of my personal portfolio, crafted with Vanilla JavaScript, HTML, and CSS. This site served as a straightforward platform to display my projects and skills, emphasizing fundamental web development practices. Its design was focused on simplicity and functionality, providing a clear and effective showcase of my capabilities in the core technologies of web development.',
    image: '/images/projects/p4.jpg',
    tag: ['All', 'WebSite'],
    gitUrl: 'https://github.com/Rocien/portfolio-site',
    previewUrl: 'https://v2-rociennkunga.vercel.app/'
  },
  {
    id: 6,
    title: 'Adventure CO - Blog',
    description:
      "Adventure Co! is a concise two-page website blog designed to showcase my web page design and flow capabilities. Crafted with HTML, CSS, and JavaScript, this site features a responsive design that ensures a seamless viewing experience on any device. It's tailored to demonstrate the effectiveness of my layout skills and the engaging user interfaces I can create, all through a visually appealing adventure-themed content presentation.",
    image: '/images/projects/p5.jpg',
    tag: ['All', 'WebSite'],
    gitUrl: 'https://github.com/Rocien/adventure-co-blog',
    previewUrl: 'https://adventure-co-blog.vercel.app/'
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // This variable "filteredProjects" Filter the project tags
  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  // This variable cardVariants is where the card show up with animation
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === 'All'} />
        <ProjectTag onClick={handleTagChange} name="WebSite" isSelected={tag === 'WebSite'} />
        <ProjectTag onClick={handleTagChange} name="WebApp" isSelected={tag === 'WebApp'} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
