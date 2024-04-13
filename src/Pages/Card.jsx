import React from 'react';
import { useState } from 'react';
import { FaPlay, FaRegHeart } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";


const Card = ({ imageUrl, title, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg relative">
      <img
        src={imageUrl}
        alt="Netflix Movie"
        className="object-cover w-full h-64 transition duration-500 ease-in-out transform hover:scale-110"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-md">{text}</p>
            <div className="mt-4 flex justify-center">
              <button className="mr-4">
                <FaPlay className="text-2xl" />
              </button>
              <button className="mr-4">
                <CiCirclePlus className="text-2xl" />
              </button>
              <button>
                <FaRegHeart className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
