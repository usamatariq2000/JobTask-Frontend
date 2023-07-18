import React from "react";

export default function TodoBar() {
  return (
    <div className="w-full h-14 flex flex-row bg-[#a08a71] bg-opacity-60 rounded border-brown-200 border-1 drop-shadow-md  ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#867963"
        className="w-10 h-10 self-center ml-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
        />
      </svg>
      <text className="self-center font-medium text-lg text-white ml-4 font-color-white font-mono">
        Your ToDos
      </text>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#867963"
        className="w-10 h-10 ml-auto self-center "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
}
