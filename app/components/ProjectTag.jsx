import React from 'react';

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? 'text-green-primary border-green-primary'
    : 'text-white-dark border-white-dark hover:border-green-primary hover:text-green-primary';
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}>
      {name}
    </button>
  );
};

export default ProjectTag;
