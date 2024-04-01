import React from 'react';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left ">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Hi, I'm Rocien
          </h1>
          <p className="text-white-dark text-lg mb-6 lg:text-xl">
            I am a full-stack software developer with a passion for creating interactive and
            responsive web applications,{' '}
          </p>
          <div className="flex flex-col sm:flex-row items-center">
            <button className="px-6 py-3 rounded-full bg-navy-primary border-solid border-2 border-white hover:bg-navy-secondary hover:text-green-primary hover:border-green-primary lg:mr-4 ">
              Hire me
            </button>
            <button className="px-6 py-3 rounded-full bg-transparent border-solid border-2 border-white hover:bg-navy-secondary hover:text-green-primary hover:border-green-primary space-y-12">
              Resume
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              layout="fill"
              //   className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  lg:"
              src="/images/Hero.png"
              alt="Hero photo"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
