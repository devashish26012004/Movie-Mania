import React from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/movies");
  };
  return (
    <div className="flex justify-center mt-2">
      <button
        onClick={handleOnClick}
        class="dark:bg-neutral-600 hover:bg-neutral-700 text-white py-2 text-xl rounded-full w-3xs shadow-md border border-neutral-700 cursor-pointer hover:translate-y-[-5px] transform transition duration-150 hover:shadow-xl"
      >
        Explore Movies
      </button>
    </div>
  );
};

export default Button;
