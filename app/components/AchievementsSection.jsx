'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const AnimatedNumbers = dynamic(
  () => {
    return import('react-animated-numbers');
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: 'Projects',
    value: '20',
    postfix: '+',
    link: 'https://github.com/Rocien?tab=repositories'
  },
  {
    metric: 'Years Experience',
    value: '3'
  }
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 md:px-28 xl:px-60">
      <div className="sm:border-[#33353F] sm:border lg:px-40 rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
              <h2 className="text-white text-4xl font-bold flex flex-row ">
                {achievement.prefix}
                {achievement.link ? (
                  <Link
                    target="_blank"
                    href={achievement.link}
                    className="text-white text-4xl font-bold hover:text-green-primary">
                    <span className="inline-flex items-center hover:text-green-primary">
                      <AnimatedNumbers
                        includeComma
                        animateToNumber={parseInt(achievement.value)}
                        locale="en-US"
                        className="text-white text-4xl font-bold hover:text-green-primary"
                        configs={(_, index) => {
                          return {
                            mass: 1,
                            friction: 100,
                            tensions: 140 * (index + 1)
                          };
                        }}
                      />
                      {achievement.postfix}
                    </span>
                  </Link>
                ) : (
                  <span className="inline-flex items-center">
                    <AnimatedNumbers
                      includeComma
                      animateToNumber={parseInt(achievement.value)}
                      locale="en-US"
                      className="text-white text-4xl font-bold"
                      configs={(_, index) => {
                        return {
                          mass: 1,
                          friction: 100,
                          tensions: 140 * (index + 1)
                        };
                      }}
                    />
                    {achievement.postfix}
                  </span>
                )}
              </h2>
              <p className="text-white-dark text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
