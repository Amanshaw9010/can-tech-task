import React from "react";
import { MoveRight } from "lucide-react";


const Button = () => {
  return (
    <>
      <button className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-500 bg-pink-700 p-2 text-white w-full justify-center rounded">
        <span>Next</span>
        <MoveRight size="20" />
      </button>
    </>
  );
};

export default Button;
