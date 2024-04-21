import React from 'react';

export default function ProjectTag({ name,onClick,isSelected }) {
  const buttonStyles = isSelected ? "text-white bg-purple-500" : "text-[#ADB&BE] border-slate-600 hover:border-white";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)} // onClick event handler to pass the tag name
    >
      {name}
    </button>
  );
}
