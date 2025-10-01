import React from "react";

export const Button = ({ title }) => {
  return <button className="bg-blue-600 hover:bg-blue-700 rounded-full text-white/80 px-[20px] cursor-pointer py-[10px] text-2xl"> {title} </button>;
};
