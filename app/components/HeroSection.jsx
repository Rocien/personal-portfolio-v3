import React from 'react';

export const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 ">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hi, I'm Rocien</h1>
          <p className="text-white-dark text-lg lg:text-xl">
            I am a full-stack software developer with a passion for creating interactive and
            responsive web applications,{' '}
          </p>
        </div>
      </div>
    </section>
  );
};
