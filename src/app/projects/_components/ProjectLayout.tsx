import React from 'react';

interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

export default function ProjectTag({ name, onClick, isSelected }: ProjectTagProps) {
  const buttonStyles = isSelected
    ? "text-white bg-purple-300"
    : "text-[#ADB&BE] border-slate-600 hover:border-white";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
}
