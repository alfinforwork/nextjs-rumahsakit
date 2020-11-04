import React from "react";

export default function Cbutton({ onClick, children, background }, props) {
  let className = `${background}-500 hover:${background}-700 text-white font-bold py-2 px-4 rounded`;
  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
